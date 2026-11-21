import { useState } from 'react';
import { X, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { LanguageCode, SupportChannel } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { SUPPORT_CHANNELS } from '../data/navigation';

interface SupportModalProps {
  open: boolean;
  initialChannel: SupportChannel['id'] | null;
  language: LanguageCode;
  t: TranslationDictionary;
  onClose: () => void;
}

export function SupportModal({
  open,
  initialChannel,
  language,
  t,
  onClose,
}: SupportModalProps) {
  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[430px] rounded-2xl bg-[#222A42] border border-[#343D58] shadow-2xl shadow-black/60 overflow-hidden">
        <div className="px-6 py-4 bg-[#242C45] border-b border-[#343D58] flex items-center justify-between">
          <div>
            <h2 id="support-modal-title" className="text-[17px] font-bold text-white">
              {t.supportModal.title}
            </h2>
            <p className="text-[12px] text-[#C1C9DC] mt-0.5">{t.supportModal.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.gameModal.close}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#C1C9DC] hover:text-white hover:bg-[#313B58] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-[12px] text-[#C1C9DC] bg-[#171B2B] border border-[#343D58] rounded-lg px-3.5 py-2">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFD028]" />
              {t.supportModal.hoursLabel}
            </span>
            <strong className="text-white">{t.supportModal.hoursValue}</strong>
          </div>

          {SUPPORT_CHANNELS.map((channel) => {
            const label =
              language === 'bn'
                ? channel.labelBn
                : language === 'hi'
                  ? channel.labelHi
                  : channel.labelEn;
            const desc =
              language === 'bn'
                ? channel.descriptionBn
                : language === 'hi'
                  ? channel.descriptionHi
                  : channel.descriptionEn;
            const isHighlighted = initialChannel === channel.id;

            return (
              <div
                key={channel.id}
                className={`rounded-xl p-3.5 border transition-colors ${
                  isHighlighted
                    ? 'bg-[#283250] border-[#FF3035]'
                    : 'bg-[#1C2338] border-[#343D58]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[14px] font-bold text-white">{label}</h3>
                    <p className="text-[12px] text-[#C1C9DC] mt-0.5 leading-snug">
                      {desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedNotice(`${label} (${channel.configHref})`)
                    }
                    className={`px-3.5 py-1.5 rounded-full bg-gradient-to-r ${channel.bgClass} text-white text-[12px] font-semibold inline-flex items-center gap-1.5 shrink-0 shadow cursor-pointer hover:brightness-110`}
                  >
                    <span>{t.supportModal.openChannel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}

          {selectedNotice && (
            <div
              role="status"
              className="rounded-lg bg-[#171B2B] border border-[#343D58] px-3 py-2 flex items-center gap-2 text-[12px] text-[#E2E8F5]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span className="truncate">{selectedNotice}</span>
            </div>
          )}

          <p className="text-[11px] text-[#8993AC] text-center pt-1">
            {t.supportModal.configNotice}
          </p>
        </div>
      </div>
    </div>
  );
}
