import { useState } from 'react';
import {
  Volume2,
  Wallet,
  ArrowDownToLine,
  Crown,
  Headphones,
  Smartphone,
  Flame,
  Fish,
  Gamepad2,
  ChevronUp,
  Star,
  CheckCircle2,
} from 'lucide-react';
import type {
  GameCategoryId,
  GameItem,
  LanguageCode,
  MobileRailTabId,
  NavSectionId,
} from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { GAME_PROVIDERS, MOBILE_RAIL_TABS } from '../data/categories';
import { ALL_GAMES, HOT_GAMES } from '../data/games';
import { ASSETS } from '../data/assets';
import { HeroSlider } from './HeroSlider';

interface MobileHomeViewProps {
  language: LanguageCode;
  t: TranslationDictionary;
  favoriteIds: ReadonlySet<string>;
  onToggleFavorite: (gameId: string) => void;
  onSelectGame: (game: GameItem) => void;
  onNavigateSection: (section: NavSectionId) => void;
  onSelectProviderInLobby: (providerId: string, category: GameCategoryId) => void;
  onOpenWallet: (mode: 'deposit' | 'withdraw') => void;
  onOpenVip: () => void;
  onOpenSupport: () => void;
}

function MobileRailIcon({ id, active }: { id: MobileRailTabId; active: boolean }) {
  const cls = `w-5 h-5 ${active ? 'text-white' : 'text-[#C1C9DC]'}`;
  switch (id) {
    case 'hot':
      return <Flame className={cls} fill={active ? 'currentColor' : 'none'} />;
    case 'slots':
      return (
        <span className={`text-[11px] font-black tracking-tight ${active ? 'text-white' : 'text-[#C1C9DC]'}`}>
          777
        </span>
      );
    case 'fishing':
      return <Fish className={cls} />;
    case 'live':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
        </svg>
      );
    case 'poker':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="10" height="14" rx="2" transform="rotate(-8 9 11)" />
          <rect x="10" y="5" width="10" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );
    case 'sports':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8.5" />
          <polygon points="12,8 15.5,10.5 14,14.8 10,14.8 8.5,10.5" fill="currentColor" fillOpacity="0.25" />
        </svg>
      );
    case 'esports':
      return <Gamepad2 className={cls} />;
    case 'cockfight':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4c2.5 0 4.5 1.8 4.5 4.2 0 1.4-.6 2.6-1.5 3.3l2.5 4.5H7.5l2.2-4.3A4.2 4.2 0 0 1 7.5 8.2C7.5 5.8 9.5 4 12 4Z" />
          <path d="M9.5 16v3.5M14.5 16v3.5" strokeLinecap="round" />
        </svg>
      );
    case 'lottery':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
  }
}

export function MobileHomeView({
  language,
  t,
  favoriteIds,
  onToggleFavorite,
  onSelectGame,
  onNavigateSection,
  onSelectProviderInLobby,
  onOpenWallet,
  onOpenVip,
  onOpenSupport,
}: MobileHomeViewProps) {
  const [activeRail, setActiveRail] = useState<MobileRailTabId>('hot');
  const [showEventBadge, setShowEventBadge] = useState(true);
  const [appNotice, setAppNotice] = useState<string | null>(null);

  const visibleGames =
    activeRail === 'hot'
      ? HOT_GAMES
      : ALL_GAMES.filter((g) => g.category === activeRail);

  const scrollToAppBlock = () => {
    const el = document.getElementById('mobile-app-download-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden pb-14 bg-[#171B2B]">
      {/* 1. Mobile Compact Hero Slider */}
      <HeroSlider language={language} onNavigateSection={onNavigateSection} />

      {/* 2. Mobile Announcement Bar with Speaker Icon matching Screenshots 4 & 5 */}
      <div className="px-2.5 mt-2">
        <div className="ticker-container h-[30px] rounded-t-lg bg-[#20273D] border-b border-[#2C3654] px-2.5 flex items-center gap-2 overflow-hidden">
          <Volume2 className="w-4 h-4 text-[#C1C9DC] shrink-0" aria-hidden="true" />
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-ba99-marquee text-[12px] text-[#E2E8F5] font-medium">
              <span className="pr-14">{t.announcement}</span>
              <span className="pr-14" aria-hidden="true">
                {t.announcement}
              </span>
            </div>
          </div>
        </div>

        {/* 3. 5-Column Quick Action Strip matching Screenshots 4 & 5 */}
        <div className="rounded-b-lg bg-[#20273D] px-1.5 py-2.5 grid grid-cols-5 gap-1 shadow-md shadow-black/20">
          <button
            type="button"
            onClick={() => onOpenWallet('deposit')}
            className="flex flex-col items-center justify-center gap-1 text-[#C1C9DC] hover:text-white cursor-pointer"
          >
            <Wallet className="w-5 h-5 text-[#E2E8F5]" strokeWidth={1.8} />
            <span className="text-[10.5px] leading-tight whitespace-nowrap">
              {t.mobileExtra.deposit}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onOpenWallet('withdraw')}
            className="flex flex-col items-center justify-center gap-1 text-[#C1C9DC] hover:text-white cursor-pointer"
          >
            <ArrowDownToLine className="w-5 h-5 text-[#E2E8F5]" strokeWidth={1.8} />
            <span className="text-[10.5px] leading-tight whitespace-nowrap">
              {t.mobileExtra.withdraw}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenVip}
            className="flex flex-col items-center justify-center gap-1 text-[#C1C9DC] hover:text-white cursor-pointer"
          >
            <Crown className="w-5 h-5 text-[#E2E8F5]" strokeWidth={1.8} />
            <span className="text-[10.5px] leading-tight whitespace-nowrap">
              {t.mobileExtra.vip}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenSupport}
            className="flex flex-col items-center justify-center gap-1 text-[#C1C9DC] hover:text-white cursor-pointer"
          >
            <Headphones className="w-5 h-5 text-[#E2E8F5]" strokeWidth={1.8} />
            <span className="text-[10.5px] leading-tight whitespace-nowrap">
              {t.mobileExtra.supportShort}
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToAppBlock}
            className="flex flex-col items-center justify-center gap-1 text-[#C1C9DC] hover:text-white cursor-pointer"
          >
            <Smartphone className="w-5 h-5 text-[#E2E8F5]" strokeWidth={1.8} />
            <span className="text-[10.5px] leading-tight whitespace-nowrap">
              {t.mobileExtra.appShort}
            </span>
          </button>
        </div>
      </div>

      {/* 4. Left Vertical Category Icon Rail + Right 3-Column Game Grid (Screenshots 3, 4, 5) */}
      <div className="px-2.5 mt-3 flex items-start gap-2.5">
        {/* Left Vertical Rail */}
        <div className="w-[62px] shrink-0 flex flex-col items-center gap-2 relative">
          {MOBILE_RAIL_TABS.map((railId) => {
            const active = activeRail === railId;
            return (
              <button
                key={railId}
                type="button"
                onClick={() => setActiveRail(railId)}
                aria-pressed={active}
                className="w-full flex flex-col items-center gap-1 cursor-pointer group"
              >
                <span
                  className={`w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-150 ${
                    active
                      ? 'bg-[#DF2C31] shadow-md shadow-[#DF2C31]/35 ring-2 ring-[#FF5A5F]/40'
                      : 'bg-[#252D46] group-hover:bg-[#303A59] border border-[#343D58]/60'
                  }`}
                >
                  <MobileRailIcon id={railId} active={active} />
                </span>
                <span
                  className={`text-[10px] leading-tight text-center ${
                    active ? 'text-white font-semibold' : 'text-[#C1C9DC]'
                  }`}
                >
                  {t.rail[railId]}
                </span>
              </button>
            );
          })}

          {/* Scroll to top button & Optional EVENT shortcut matching Screenshot 5 */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="mt-1 w-7 h-7 rounded-full bg-[#FF6B2C] text-white flex items-center justify-center shadow cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          {showEventBadge && (
            <div className="relative mt-0.5">
              <button
                type="button"
                onClick={() => onNavigateSection('offers')}
                className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#FFD028] to-[#FF7A00] text-[#171B2B] font-black text-[10px] tracking-tight flex items-center justify-center shadow-lg border-2 border-white/40 cursor-pointer"
              >
                {t.mobileExtra.eventBadge}
              </button>
              <button
                type="button"
                onClick={() => setShowEventBadge(false)}
                aria-label="Dismiss event badge"
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#171B2B] border border-[#343D58] text-white text-[9px] flex items-center justify-center cursor-pointer"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Right 3-Column Game Grid */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-3 gap-2">
            {visibleGames.map((game) => {
              const title = language === 'bn' ? game.titleBn : game.titleEn;
              const isFav = favoriteIds.has(game.id);

              return (
                <article
                  key={game.id}
                  className="relative rounded-xl overflow-hidden bg-transparent"
                >
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(game.id)}
                    aria-pressed={isFav}
                    aria-label={`${isFav ? t.favoriteRemove : t.favoriteAdd}: ${title}`}
                    className={`absolute top-1 right-1 z-10 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer ${
                      isFav ? 'bg-black/65 text-[#FFD028]' : 'bg-black/45 text-white/80'
                    }`}
                  >
                    <Star
                      className="w-3 h-3"
                      fill={isFav ? '#FFD028' : 'currentColor'}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectGame(game)}
                    className="w-full block text-center cursor-pointer"
                  >
                    <div
                      className={`relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br ${game.accentGradient} border border-[#2E3856]`}
                    >
                      <img
                        src={game.image}
                        alt={title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover ${
                          game.thumbnailCrop ? 'scale-[1.32]' : ''
                        }`}
                      />
                      {game.badge && (
                        <span
                          className={`absolute bottom-1 right-1 px-1 py-[1px] rounded text-[8px] font-black uppercase ${
                            game.badge === 'BUY'
                              ? 'bg-[#6635FF] text-white'
                              : 'bg-[#E52227] text-white'
                          }`}
                        >
                          {game.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-[11px] font-medium text-[#E2E8F5] leading-[1.25] line-clamp-2">
                      {title}
                    </h3>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Mobile JACKPOT Showcase Banner matching Screenshot 2 */}
      <section aria-label="Jackpot Showcase" className="px-2.5 mt-5">
        <div className="relative h-[136px] rounded-xl overflow-hidden bg-[#12182C] border border-[#2D385C]">
          <img
            src={ASSETS.mobileJackpot}
            alt="SAMIR99 Jackpot Showcase"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1326]/45 flex flex-col items-center justify-center px-6 text-center">
            <span className="font-display text-[30px] font-black tracking-wide bg-gradient-to-b from-[#FFFFFF] via-[#90C8FF] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {t.mobileExtra.jackpotLabel}
            </span>
            <span className="mt-0.5 font-display text-[22px] font-extrabold text-white tabular-nums tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              15,712,027.12
            </span>
            <span className="mt-1 text-[9.5px] text-[#C1C9DC]/90">
              {t.mobileExtra.jackpotDemoNote}
            </span>
          </div>
        </div>
      </section>

      {/* 6. Mobile App Download Banner (Zeus Left + Android/iOS Buttons Right) matching Screenshot 2 */}
      <section
        id="mobile-app-download-card"
        aria-label={t.nav.app}
        className="px-2.5 mt-4"
      >
        <div className="rounded-xl bg-[#1A2138] border border-[#2C3656] overflow-hidden grid grid-cols-[0.95fr_1.05fr] items-center p-3 gap-2">
          <div className="aspect-square w-full max-w-[160px] mx-auto rounded-xl overflow-hidden">
            <img
              src={ASSETS.mobileZeus}
              alt="SAMIR99 Mobile App"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2.5 pr-1">
            <h2 className="text-[20px] font-bold text-white leading-[1.18]">
              {t.nav.app}
            </h2>

            <button
              type="button"
              onClick={() => setAppNotice(`Android — ${t.appDownloadBtn}`)}
              className="w-full h-[36px] rounded-md bg-[#5682F9] hover:bg-[#4572EC] text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.mobileExtra.androidBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => setAppNotice(`iOS — ${t.appDownloadBtn}`)}
              className="w-full h-[36px] rounded-md bg-[#DF2C31] hover:bg-[#C92126] text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.mobileExtra.iosBtn}</span>
            </button>

            {appNotice && (
              <p role="status" className="text-[10.5px] text-[#34D399] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{appNotice}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 7. Mobile 5-Column Provider Logos Grid matching Screenshots 1 & 2 */}
      <section aria-label="Game Providers" className="px-2.5 mt-5">
        <div className="grid grid-cols-5 gap-x-1.5 gap-y-3 items-center justify-items-center py-2">
          {GAME_PROVIDERS.map((provider) => (
            <button
              key={provider.id}
              type="button"
              onClick={() =>
                onSelectProviderInLobby(
                  provider.id,
                  provider.categories[0] ?? 'slots'
                )
              }
              className="w-full py-1 px-1 rounded hover:bg-[#232B45] transition-colors flex flex-col items-center justify-center cursor-pointer"
            >
              <span
                className="font-display font-extrabold text-[11px] tracking-tight leading-tight text-center truncate max-w-full"
                style={{ color: provider.accentColor }}
              >
                {provider.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 8. Mobile Regulatory & Trust Strip matching Screenshot 1 */}
      <div className="px-3 mt-4 pt-4 border-t border-[#2A3350] text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-[#C1C9DC]">
          <span>bmm</span>
          <span>iTech Labs</span>
          <span>MGA</span>
          <span>eCOGRA</span>
          <span>Skrill</span>
          <span>paysafe</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[11px] text-[#C1C9DC] font-semibold">
          <span className="w-7 h-7 rounded-full border border-[#8993AC] inline-flex items-center justify-center text-[10px]">
            18+
          </span>
          <span>Be Gamble Aware</span>
          <span>GAMCARE</span>
        </div>

        <p className="text-[10.5px] text-[#8993AC]">{t.copyright}</p>
      </div>
    </div>
  );
}
