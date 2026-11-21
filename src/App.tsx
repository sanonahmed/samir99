import { useState, useCallback } from 'react';
import type {
  GameCategoryId,
  GameItem,
  LanguageCode,
  NavSectionId,
  SubFilterTagId,
  SupportChannel,
} from './types/gaming';
import { TRANSLATIONS } from './data/translations';
import { HOT_GAMES } from './data/games';
import { toggleFavoriteId } from './utils/catalogLogic';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileNavigation, type MobileBottomTabId } from './components/MobileNavigation';
import { HeroSlider } from './components/HeroSlider';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { SectionHeading } from './components/SectionHeading';
import { GameGrid } from './components/GameGrid';
import { CategoryGrid } from './components/CategoryGrid';
import { CategoryLobbyView } from './components/CategoryLobbyView';
import { AppDownloadSection } from './components/AppDownloadSection';
import { OffersSection } from './components/OffersSection';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { MobileHomeView } from './components/MobileHomeView';
import { AuthModal } from './components/AuthModal';
import { GamePreviewModal } from './components/GamePreviewModal';
import { SupportModal } from './components/SupportModal';
import { FeatureModals, type FeatureModalType } from './components/FeatureModals';

const GAME_CATEGORY_SET = new Set<NavSectionId>([
  'slots',
  'fishing',
  'live',
  'poker',
  'sports',
  'esports',
  'cockfight',
  'lottery',
]);

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [language, setLanguage] = useState<LanguageCode>('bn');
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => new Set());
  const [selectedProviderId, setSelectedProviderId] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<SubFilterTagId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const [authModalMode, setAuthModalMode] = useState<'login' | 'register' | null>(null);
  const [demoUser, setDemoUser] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [featureModal, setFeatureModal] = useState<FeatureModalType>(null);
  const [supportModalState, setSupportModalState] = useState<{
    open: boolean;
    channel: SupportChannel['id'] | null;
  }>({ open: false, channel: null });

  const t = TRANSLATIONS[language];

  const handleToggleFavorite = useCallback((gameId: string) => {
    setFavoriteIds((prev) => toggleFavoriteId(prev, gameId));
  }, []);

  const handleSelectSection = useCallback((section: NavSectionId) => {
    if (section === 'support') {
      setSupportModalState({ open: true, channel: 'livechat' });
      return;
    }

    setActiveSection(section);
    setSelectedProviderId('all');
    setSelectedTag('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectCategory = useCallback((category: GameCategoryId) => {
    setActiveSection(category);
    setSelectedProviderId('all');
    setSelectedTag('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectProviderInLobby = useCallback(
    (providerId: string, category: GameCategoryId) => {
      setActiveSection(category);
      setSelectedProviderId(providerId);
      setSelectedTag('all');
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleResetFilters = useCallback(() => {
    setSelectedProviderId('all');
    setSelectedTag('all');
    setSearchQuery('');
  }, []);

  const handleMobileBottomTab = useCallback(
    (tab: MobileBottomTabId) => {
      if (tab === 'home') {
        handleSelectSection('home');
      } else if (tab === 'offers') {
        handleSelectSection('offers');
      } else if (tab === 'invite') {
        setFeatureModal({ kind: 'invite' });
      } else if (tab === 'member') {
        setFeatureModal({ kind: 'member' });
      }
    },
    [handleSelectSection]
  );

  const activeMobileBottomTab: MobileBottomTabId =
    featureModal?.kind === 'invite'
      ? 'invite'
      : featureModal?.kind === 'member'
        ? 'member'
        : activeSection === 'offers'
          ? 'offers'
          : 'home';

  const isCategoryView = GAME_CATEGORY_SET.has(activeSection);

  return (
    <div className="min-h-screen bg-[#171B2B] text-white">
      {/* 1. Fixed Top Header */}
      <Header
        t={t}
        demoUser={demoUser}
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebarCollapse={() => setSidebarCollapsed((prev) => !prev)}
        onOpenMobileDrawer={() => setMobileDrawerOpen(true)}
        onNavigateHome={() => handleSelectSection('home')}
        onOpenAuth={(mode) => setAuthModalMode(mode)}
        onLogout={() => setDemoUser(null)}
      />

      {/* 2. Fixed Left Sidebar & Mobile Slide-Out Drawer */}
      <Sidebar
        activeSection={activeSection}
        language={language}
        t={t}
        collapsed={sidebarCollapsed}
        mobileOpen={mobileDrawerOpen}
        onSelectSection={handleSelectSection}
        onSelectLanguage={setLanguage}
        onCloseMobile={() => setMobileDrawerOpen(false)}
      />

      {/* 3. Main Scrollable Content Area */}
      <main
        className={`pt-[52px] min-h-screen transition-[padding-left] duration-200 ${
          sidebarCollapsed ? 'md:pl-[68px] lg:pl-[180px]' : 'md:pl-[180px]'
        }`}
      >
        {activeSection === 'home' && (
          <>
            {/* Mobile-First Home Experience matching the 5 Mobile Screenshots */}
            <MobileHomeView
              language={language}
              t={t}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
              onSelectGame={setSelectedGame}
              onNavigateSection={handleSelectSection}
              onSelectProviderInLobby={handleSelectProviderInLobby}
              onOpenWallet={(mode) => setFeatureModal({ kind: 'wallet', mode })}
              onOpenVip={() => setFeatureModal({ kind: 'vip' })}
              onOpenSupport={() =>
                setSupportModalState({ open: true, channel: 'livechat' })
              }
            />

            {/* Desktop Home Experience matching the Desktop Reference Screenshots */}
            <div className="hidden md:block">
              <HeroSlider
                language={language}
                onNavigateSection={handleSelectSection}
              />

              <AnnouncementTicker message={t.announcement} />

              <section aria-labelledby="hot-games-heading">
                <SectionHeading title={t.hotGames} id="hot-games-heading" />
                <GameGrid
                  games={HOT_GAMES}
                  language={language}
                  t={t}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={handleToggleFavorite}
                  onSelectGame={setSelectedGame}
                />
              </section>

              <CategoryGrid
                language={language}
                onSelectCategory={handleSelectCategory}
              />

              <AppDownloadSection t={t} />
            </div>
          </>
        )}

        {isCategoryView && (
          <>
            <AnnouncementTicker message={t.announcement} />
            <CategoryLobbyView
              category={activeSection as GameCategoryId}
              selectedProviderId={selectedProviderId}
              selectedTag={selectedTag}
              searchQuery={searchQuery}
              language={language}
              t={t}
              favoriteIds={favoriteIds}
              onSelectProvider={setSelectedProviderId}
              onSelectTag={setSelectedTag}
              onSearchChange={setSearchQuery}
              onToggleFavorite={handleToggleFavorite}
              onSelectGame={setSelectedGame}
              onResetFilters={handleResetFilters}
            />
          </>
        )}

        {activeSection === 'offers' && (
          <>
            <AnnouncementTicker message={t.announcement} />
            <OffersSection
              language={language}
              t={t}
              onExploreCategory={handleSelectCategory}
            />
          </>
        )}

        {activeSection === 'app' && (
          <>
            <AnnouncementTicker message={t.announcement} />
            <AppDownloadSection t={t} />
          </>
        )}

        {/* Desktop & Category Footer (Mobile home already renders compact trust footer matching Screenshot 1) */}
        <div className={activeSection === 'home' ? 'hidden md:block' : 'block'}>
          <Footer t={t} />
        </div>
      </main>

      {/* 4. Floating Social Support Buttons */}
      <FloatingSupport
        language={language}
        onOpenChannel={(channelId) =>
          setSupportModalState({ open: true, channel: channelId })
        }
      />

      {/* Mobile Sticky 4-Tab Bottom Navigation */}
      <MobileNavigation
        activeTab={activeMobileBottomTab}
        t={t}
        onSelectTab={handleMobileBottomTab}
      />

      {/* Modals */}
      <AuthModal
        mode={authModalMode}
        t={t}
        onClose={() => setAuthModalMode(null)}
        onSwitchMode={(mode) => setAuthModalMode(mode)}
        onSuccess={(user) => setDemoUser(user)}
      />

      <GamePreviewModal
        game={selectedGame}
        language={language}
        t={t}
        isFavorite={selectedGame ? favoriteIds.has(selectedGame.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onClose={() => setSelectedGame(null)}
      />

      <SupportModal
        open={supportModalState.open}
        initialChannel={supportModalState.channel}
        language={language}
        t={t}
        onClose={() => setSupportModalState({ open: false, channel: null })}
      />

      <FeatureModals
        modal={featureModal}
        t={t}
        language={language}
        demoUser={demoUser}
        favoritesCount={favoriteIds.size}
        onClose={() => setFeatureModal(null)}
        onSelectLanguage={setLanguage}
        onOpenAuth={(mode) => setAuthModalMode(mode)}
        onOpenSupport={() =>
          setSupportModalState({ open: true, channel: 'livechat' })
        }
        onOpenFavorites={() => {
          setActiveSection('slots');
          setSelectedProviderId('all');
          setSelectedTag('favorites');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
