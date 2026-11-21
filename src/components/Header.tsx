import { Menu, LogOut, User, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import type { TranslationDictionary } from '../data/translations';
import { BA99Logo } from './BA99Logo';

interface HeaderProps {
  t: TranslationDictionary;
  demoUser: string | null;
  sidebarCollapsed: boolean;
  onToggleSidebarCollapse: () => void;
  onOpenMobileDrawer: () => void;
  onNavigateHome: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLogout: () => void;
}

export function Header({
  t,
  demoUser,
  sidebarCollapsed,
  onToggleSidebarCollapse,
  onOpenMobileDrawer,
  onNavigateHome,
  onOpenAuth,
  onLogout,
}: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 h-[52px] bg-[#1D243B] md:bg-[#242C45] border-b border-[#2D3756]/80 px-3 sm:px-5 flex items-center justify-between shadow-md shadow-black/25">
      {/* Left: Tablet Collapse + SAMIR99 Brand Wordmark */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={onToggleSidebarCollapse}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden md:inline-flex lg:hidden items-center justify-center w-8 h-8 rounded-lg text-[#C1C9DC] hover:text-white hover:bg-[#2F3958] transition-colors"
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="w-4 h-4" />
          ) : (
            <PanelLeftClose className="w-4 h-4" />
          )}
        </button>

        <button
          type="button"
          onClick={onNavigateHome}
          aria-label="SAMIR99 Home"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3035] rounded-md transition-transform duration-150 hover:scale-[1.02] active:scale-95"
        >
          <BA99Logo size="header" />
        </button>
      </div>

      {/* Right: Mobile (Red লগইন + Periwinkle নিবন্ধন + Hamburger) & Desktop (Gray-Blue লগইন + Red নিবন্ধন করুন) */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {demoUser ? (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1.5 bg-[#1B2135] border border-[#343D58] rounded-full px-2.5 sm:px-3 h-[30px] sm:h-[32px] text-[12px] sm:text-[12.5px] text-[#C1C9DC]">
              <User className="w-3.5 h-3.5 text-[#FF3035]" />
              <span className="font-semibold text-white max-w-[85px] sm:max-w-[100px] truncate">
                {demoUser}
              </span>
            </div>
            <button
              type="button"
              onClick={onLogout}
              aria-label="Logout"
              className="inline-flex items-center justify-center h-[30px] sm:h-[32px] px-2.5 sm:px-3 rounded-full bg-[#323B56] hover:bg-[#3E496A] text-[#C1C9DC] hover:text-white text-[12px] font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <>
            {/* Mobile Login & Register Pills matching Screenshots 1-5 */}
            <button
              type="button"
              onClick={() => onOpenAuth('login')}
              className="md:hidden h-[30px] px-4 rounded-full bg-[#DF2C31] hover:bg-[#E62227] text-white text-[12.5px] font-semibold transition-all duration-150 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              {t.login}
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth('register')}
              className="md:hidden h-[30px] px-4 rounded-full bg-[#6C8EFF] hover:bg-[#5B7EF6] text-white text-[12.5px] font-semibold transition-all duration-150 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              {t.registerShort}
            </button>

            {/* Desktop Login & Register Pills matching Desktop Reference */}
            <button
              type="button"
              onClick={() => onOpenAuth('login')}
              className="hidden md:inline-flex items-center justify-center h-[32px] px-6 rounded-full bg-[#B9C4DA] hover:bg-[#CDD6E8] text-[#171B2B] text-[13px] font-semibold tracking-wide transition-all duration-150 hover:-translate-y-[0.5px] active:translate-y-0 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              {t.login}
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth('register')}
              className="hidden md:inline-flex items-center justify-center h-[32px] px-5 rounded-full bg-[#FF3035] hover:bg-[#E62227] text-white text-[13px] font-semibold tracking-wide transition-all duration-150 hover:-translate-y-[0.5px] active:translate-y-0 whitespace-nowrap shrink-0 shadow-md shadow-[#FF3035]/25 cursor-pointer"
            >
              {t.register}
            </button>
          </>
        )}

        {/* Mobile Right-Side Hamburger Drawer Button matching Screenshots 1-5 */}
        <button
          type="button"
          onClick={onOpenMobileDrawer}
          aria-label={t.mobile.menuOpen}
          className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg text-white hover:bg-[#2A3350] transition-colors cursor-pointer"
        >
          <Menu className="w-6 h-6" strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}
