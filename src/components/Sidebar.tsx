import { useState, useRef, useEffect } from 'react';
import {
  Home,
  Fish,
  Gift,
  Smartphone,
  Headphones,
  Globe,
  ChevronRight,
  X,
  Check,
} from 'lucide-react';
import type { LanguageCode, NavSectionId } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { LANGUAGE_OPTIONS, SIDEBAR_NAV_ITEMS } from '../data/navigation';
import { BA99Logo } from './BA99Logo';

interface SidebarProps {
  activeSection: NavSectionId;
  language: LanguageCode;
  t: TranslationDictionary;
  collapsed: boolean;
  mobileOpen: boolean;
  onSelectSection: (section: NavSectionId) => void;
  onSelectLanguage: (lang: LanguageCode) => void;
  onCloseMobile: () => void;
}

function FlagIcon({ type }: { type: 'bd' | 'uk' | 'in' }) {
  if (type === 'bd') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#006A4E" />
        <circle cx="10.8" cy="12" r="5" fill="#F42A41" />
      </svg>
    );
  }
  if (type === 'in') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full shrink-0" aria-hidden="true">
        <clipPath id="inFlagClip">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
        <g clipPath="url(#inFlagClip)">
          <rect width="24" height="8" y="0" fill="#FF9933" />
          <rect width="24" height="8" y="8" fill="#FFFFFF" />
          <rect width="24" height="8" y="16" fill="#138808" />
          <circle cx="12" cy="12" r="2.3" fill="none" stroke="#000080" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full shrink-0" aria-hidden="true">
      <clipPath id="ukFlagClip">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath="url(#ukFlagClip)">
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
        <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

function SidebarNavIcon({ id, active }: { id: NavSectionId; active: boolean }) {
  const iconClass = `w-[17px] h-[17px] shrink-0 transition-colors ${
    active ? 'text-white' : 'text-[#C1C9DC]'
  }`;

  switch (id) {
    case 'home':
      return <Home className={iconClass} strokeWidth={2.2} />;
    case 'slots':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M9 4v16M15 4v16" strokeOpacity="0.45" />
          <path d="M5.5 10h2l-1 4M11 10h2l-1 4M16.5 10h2l-1 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'fishing':
      return <Fish className={iconClass} strokeWidth={2} />;
    case 'live':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5" />
        </svg>
      );
    case 'poker':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="4" y="4" width="10" height="14" rx="2" transform="rotate(-8 9 11)" />
          <rect x="10" y="5" width="10" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
          <path d="M15 10.2c-.8 1.1-1.6 1.8-1.6 2.6a1.6 1.6 0 0 0 3.2 0c0-.8-.8-1.5-1.6-2.6Z" fill="currentColor" />
        </svg>
      );
    case 'sports':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9" />
          <polygon points="12,7.8 15.8,10.5 14.3,15 9.7,15 8.2,10.5" fill="currentColor" fillOpacity="0.25" />
          <path d="M12 3v4.8M15.8 10.5l4.6-1.5M14.3 15l2.7 3.8M9.7 15L7 18.8M8.2 10.5L3.6 9" />
        </svg>
      );
    case 'lottery':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21" />
        </svg>
      );
    case 'offers':
      return <Gift className={iconClass} strokeWidth={2} />;
    case 'app':
      return <Smartphone className={iconClass} strokeWidth={2} />;
    case 'support':
      return <Headphones className={iconClass} strokeWidth={2} />;
  }
}

export function Sidebar({
  activeSection,
  language,
  t,
  collapsed,
  mobileOpen,
  onSelectSection,
  onSelectLanguage,
  onCloseMobile,
}: SidebarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const currentLang =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) ?? LANGUAGE_OPTIONS[0];

  const renderSidebarBody = (isMobileDrawer: boolean) => {
    const compactMd = !isMobileDrawer && collapsed;

    return (
      <div className="flex flex-col h-full bg-[#222A42] text-[#C1C9DC] select-none">
        {isMobileDrawer && (
          <div className="flex items-center justify-between px-4 h-[52px] border-b border-[#343D58] shrink-0">
            <BA99Logo size="sm" />
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label={t.mobile.menuClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#C1C9DC] hover:text-white hover:bg-[#2F3958]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <nav
          aria-label="Primary Sidebar Navigation"
          className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1"
        >
          {SIDEBAR_NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const label = t.nav[item.id];
            const isMultilineApp = item.multilineBn && language === 'bn';

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectSection(item.id);
                  if (isMobileDrawer) onCloseMobile();
                }}
                aria-current={isActive ? 'page' : undefined}
                aria-label={label}
                title={compactMd ? label : undefined}
                className={`group w-full flex items-center ${
                  compactMd ? 'md:justify-center md:px-0 lg:justify-between lg:px-3.5' : 'justify-between px-3.5'
                } py-2 min-h-[38px] rounded-full text-[13.5px] transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF3035] to-[#FF463D] text-white font-semibold shadow-md shadow-[#FF3035]/25'
                    : 'text-[#C1C9DC] hover:text-white hover:bg-[#2C3654] font-medium'
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <SidebarNavIcon id={item.id} active={isActive} />
                  <span
                    className={`${compactMd ? 'md:hidden lg:inline' : ''} ${
                      isMultilineApp
                        ? 'text-left leading-[1.2] whitespace-normal'
                        : 'truncate whitespace-nowrap'
                    }`}
                  >
                    {isMultilineApp ? (
                      <>
                        অ্যাপ
                        <br />
                        ডাউনলোড
                      </>
                    ) : (
                      label
                    )}
                  </span>
                </span>

                {item.hasChevron && (
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      compactMd ? 'md:hidden lg:block' : ''
                    } ${isActive ? 'text-white' : 'text-[#8993AC]'}`}
                  />
                )}
              </button>
            );
          })}

          {/* 11th Item: Language Selector with Globe + Flag Pill Dropdown */}
          <div ref={isMobileDrawer ? undefined : langRef} className="relative pt-2">
            <div
              className={`flex items-center ${
                compactMd ? 'md:justify-center lg:gap-2 lg:px-1.5' : 'gap-2 px-1.5'
              }`}
            >
              <Globe
                className={`w-[17px] h-[17px] text-[#C1C9DC] shrink-0 ${
                  compactMd ? 'md:hidden lg:block' : ''
                }`}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={`Language: ${currentLang.nativeLabel}`}
                className={`flex items-center justify-between gap-2 rounded-full bg-[#313B58] hover:bg-[#3B4769] border border-[#3E4A6D] text-white text-[12.5px] font-medium transition-colors cursor-pointer ${
                  compactMd ? 'md:p-1.5 lg:flex-1 lg:px-2.5 lg:py-1.5' : 'flex-1 px-2.5 py-1.5'
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <FlagIcon type={currentLang.flagType} />
                  <span
                    className={`truncate whitespace-nowrap ${
                      compactMd ? 'md:hidden lg:inline' : ''
                    }`}
                  >
                    {currentLang.nativeLabel}
                  </span>
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 text-[#C1C9DC] shrink-0 transition-transform duration-150 ${
                    compactMd ? 'md:hidden lg:block' : ''
                  } ${langOpen ? 'rotate-90' : ''}`}
                />
              </button>
            </div>

            {langOpen && (
              <div
                role="listbox"
                aria-label="Select Language"
                className="absolute left-1.5 right-1.5 mt-1.5 z-50 rounded-xl bg-[#1D243A] border border-[#343D58] shadow-xl shadow-black/45 p-1 space-y-0.5 min-w-[140px]"
              >
                {LANGUAGE_OPTIONS.map((opt) => {
                  const selected = opt.code === language;
                  return (
                    <button
                      key={opt.code}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        onSelectLanguage(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-[12.5px] transition-colors cursor-pointer ${
                        selected
                          ? 'bg-[#FF3035] text-white font-semibold'
                          : 'text-[#C1C9DC] hover:bg-[#2B3552] hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <FlagIcon type={opt.flagType} />
                        <span>{opt.nativeLabel}</span>
                      </span>
                      {selected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Fixed Left Sidebar */}
      <aside
        className={`hidden md:block fixed top-[52px] left-0 bottom-0 z-30 border-r border-[#2C3552]/70 transition-all duration-200 ${
          collapsed ? 'w-[68px] lg:w-[180px]' : 'w-[180px]'
        }`}
      >
        {renderSidebarBody(false)}
      </aside>

      {/* Mobile Slide-Out Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-[2px]"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <div className="relative z-10 w-[230px] max-w-[80vw] h-full shadow-2xl">
            {renderSidebarBody(true)}
          </div>
        </div>
      )}
    </>
  );
}
