import { useState } from 'react';
import {
  X,
  ShieldAlert,
  Crown,
  Copy,
  Check,
  Users,
  Star,
  Globe,
  Headphones,
  LogIn,
  UserPlus,
} from 'lucide-react';
import type { LanguageCode } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { LANGUAGE_OPTIONS } from '../data/navigation';

export type FeatureModalType =
  | { kind: 'wallet'; mode: 'deposit' | 'withdraw' }
  | { kind: 'vip' }
  | { kind: 'invite' }
  | { kind: 'member' }
  | null;

interface FeatureModalsProps {
  modal: FeatureModalType;
  t: TranslationDictionary;
  language: LanguageCode;
  demoUser: string | null;
  favoritesCount: number;
  onClose: () => void;
  onSelectLanguage: (lang: LanguageCode) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenSupport: () => void;
  onOpenFavorites: () => void;
}

const VIP_TIERS = [
  { level: 'VIP 1', name: 'Bronze', color: '#CD7F32' },
  { level: 'VIP 2', name: 'Silver', color: '#CBD5E1' },
  { level: 'VIP 3', name: 'Gold', color: '#FFD028' },
  { level: 'VIP 4', name: 'Platinum', color: '#38BDF8' },
  { level: 'VIP 5', name: 'Diamond', color: '#A855F7' },
];

export function FeatureModals({
  modal,
  t,
  language,
  demoUser,
  favoritesCount,
  onClose,
  onSelectLanguage,
  onOpenAuth,
  onOpenSupport,
  onOpenFavorites,
}: FeatureModalsProps) {
  const [copied, setCopied] = useState(false);

  if (!modal) return null;

  const inviteCode = 'SAMIR99-REF';

  const handleCopyInvite = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(inviteCode).catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[420px] rounded-2xl bg-[#222A42] border border-[#343D58] shadow-2xl shadow-black/65 overflow-hidden">
        <div className="px-5 py-4 bg-[#242C45] border-b border-[#343D58] flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-white">
            {modal.kind === 'wallet' &&
              (modal.mode === 'deposit'
                ? t.mobileExtra.walletDepositTitle
                : t.mobileExtra.walletWithdrawTitle)}
            {modal.kind === 'vip' && t.mobileExtra.vipTitle}
            {modal.kind === 'invite' && t.mobileExtra.inviteTitle}
            {modal.kind === 'member' && t.mobileExtra.memberTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.gameModal.close}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#C1C9DC] hover:text-white hover:bg-[#313B58] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {modal.kind === 'wallet' && (
            <>
              <div className="rounded-xl bg-[#171B2B] border border-[#343D58] p-4 flex items-start gap-3 text-[13px] text-[#C1C9DC] leading-relaxed">
                <ShieldAlert className="w-5 h-5 text-[#FFD028] shrink-0 mt-0.5" />
                <p>{t.mobileExtra.walletNotice}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-[40px] rounded-full bg-[#FF3035] hover:bg-[#E52227] text-white text-[13.5px] font-semibold cursor-pointer"
              >
                {t.gameModal.close}
              </button>
            </>
          )}

          {modal.kind === 'vip' && (
            <>
              <p className="text-[12.5px] text-[#C1C9DC]">
                {t.mobileExtra.vipSubtitle}
              </p>
              <div className="space-y-2">
                {VIP_TIERS.map((tier) => (
                  <div
                    key={tier.level}
                    className="flex items-center justify-between rounded-xl bg-[#171B2B] border border-[#343D58] px-3.5 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Crown className="w-4 h-4" style={{ color: tier.color }} />
                      <span className="text-[13px] font-bold text-white">
                        {tier.level}
                      </span>
                    </div>
                    <span
                      className="text-[12px] font-semibold"
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {modal.kind === 'invite' && (
            <>
              <div className="flex items-center gap-3 rounded-xl bg-[#171B2B] border border-[#343D58] p-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6635FF]/20 text-[#9D7BFF] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-[12.5px] text-[#C1C9DC] leading-snug">
                  {t.mobileExtra.inviteSubtitle}
                </p>
              </div>

              <div className="rounded-xl bg-[#171B2B] border border-[#343D58] p-3 flex items-center justify-between gap-2">
                <div>
                  <span className="block text-[11px] text-[#8993AC]">
                    {t.mobileExtra.inviteCodeLabel}
                  </span>
                  <span className="text-[15px] font-bold font-mono text-white">
                    {inviteCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyInvite}
                  className="px-3.5 py-1.5 rounded-full bg-[#FF3035] hover:bg-[#E52227] text-white text-[12px] font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.mobileExtra.inviteCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.mobileExtra.inviteCopyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {modal.kind === 'member' && (
            <>
              <div className="rounded-xl bg-[#171B2B] border border-[#343D58] p-4 flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-bold text-white">
                    {demoUser ?? t.mobileExtra.memberGuest}
                  </p>
                  <p className="text-[11.5px] text-[#8993AC] mt-0.5">
                    SAMIR99 Account Preview
                  </p>
                </div>
                {!demoUser && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenAuth('login');
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#DF2C31] text-white text-[11.5px] font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <LogIn className="w-3 h-3" />
                      <span>{t.login}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenAuth('register');
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#6C8EFF] text-white text-[11.5px] font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <UserPlus className="w-3 h-3" />
                      <span>{t.registerShort}</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenFavorites();
                  }}
                  className="rounded-xl bg-[#171B2B] border border-[#343D58] hover:border-[#FF3035] p-3 text-left transition-colors cursor-pointer"
                >
                  <Star className="w-4 h-4 text-[#FFD028] mb-1.5" />
                  <p className="text-[12.5px] font-semibold text-white">
                    {t.mobileExtra.memberFavorites}
                  </p>
                  <p className="text-[11px] text-[#8993AC] tabular-nums">
                    {favoritesCount}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSupport();
                  }}
                  className="rounded-xl bg-[#171B2B] border border-[#343D58] hover:border-[#FF3035] p-3 text-left transition-colors cursor-pointer"
                >
                  <Headphones className="w-4 h-4 text-[#38BDF8] mb-1.5" />
                  <p className="text-[12.5px] font-semibold text-white">
                    {t.mobileExtra.memberQuickSupport}
                  </p>
                  <p className="text-[11px] text-[#8993AC]">24/7</p>
                </button>
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#C1C9DC] mb-2 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.mobileExtra.memberLanguage}</span>
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => onSelectLanguage(opt.code)}
                      className={`py-2 rounded-lg text-[12px] font-semibold border transition-colors cursor-pointer ${
                        language === opt.code
                          ? 'bg-[#FF3035] border-[#FF3035] text-white'
                          : 'bg-[#171B2B] border-[#343D58] text-[#C1C9DC] hover:text-white'
                      }`}
                    >
                      {opt.nativeLabel}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
