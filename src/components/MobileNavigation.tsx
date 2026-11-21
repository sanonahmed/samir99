import { Home, Gift, Users, User } from 'lucide-react';
import type { TranslationDictionary } from '../data/translations';

export type MobileBottomTabId = 'home' | 'offers' | 'invite' | 'member';

interface MobileNavigationProps {
  activeTab: MobileBottomTabId;
  t: TranslationDictionary;
  onSelectTab: (tab: MobileBottomTabId) => void;
}

export function MobileNavigation({
  activeTab,
  t,
  onSelectTab,
}: MobileNavigationProps) {
  const tabs: Array<{
    id: MobileBottomTabId;
    label: string;
    Icon: typeof Home;
  }> = [
    { id: 'home', label: t.mobileExtra.bottomHome, Icon: Home },
    { id: 'offers', label: t.mobileExtra.bottomPromotion, Icon: Gift },
    { id: 'invite', label: t.mobileExtra.bottomInvite, Icon: Users },
    { id: 'member', label: t.mobileExtra.bottomMember, Icon: User },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 h-[56px] bg-[#1B2237] border-t border-[#2E3856] grid grid-cols-4 items-stretch shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"
    >
      {tabs.map(({ id, label, Icon }) => {
        const active = activeTab === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelectTab(id)}
            aria-current={active ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer rounded-t-md ${
              active
                ? 'bg-[#DF2C31] text-white font-semibold'
                : 'text-[#C1C9DC] hover:text-white'
            }`}
          >
            <Icon className="w-[19px] h-[19px]" strokeWidth={active ? 2.4 : 2} />
            <span className="text-[11px] leading-tight whitespace-nowrap">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
