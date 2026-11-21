import { useState, useEffect } from 'react';
import { X, Star, Play, ShieldCheck } from 'lucide-react';
import type { GameItem, LanguageCode } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';

interface GamePreviewModalProps {
  game: GameItem | null;
  language: LanguageCode;
  t: TranslationDictionary;
  isFavorite: boolean;
  onToggleFavorite: (gameId: string) => void;
  onClose: () => void;
}

export function GamePreviewModal({
  game,
  language,
  t,
  isFavorite,
  onToggleFavorite,
  onClose,
}: GamePreviewModalProps) {
  const [previewActive, setPreviewActive] = useState(false);

  useEffect(() => {
    setPreviewActive(false);
  }, [game?.id]);

  if (!game) return null;

  const title = language === 'bn' ? game.titleBn : game.titleEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-preview-title"
    >
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[440px] rounded-2xl bg-[#222A42] border border-[#343D58] shadow-2xl shadow-black/65 overflow-hidden">
        <div className="relative h-[200px] bg-[#171B2B] overflow-hidden">
          <img
            src={game.image}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#222A42] via-[#222A42]/30 to-black/35" />

          <button
            type="button"
            onClick={onClose}
            aria-label={t.gameModal.close}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-5 right-5">
            <h2 id="game-preview-title" className="text-[20px] font-bold text-white drop-shadow">
              {title}
            </h2>
            <p className="text-[12.5px] text-[#C1C9DC]">
              {game.titleEn} · {game.providerName}
            </p>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between text-[12.5px] text-[#C1C9DC] border-b border-[#343D58] pb-3">
            <span>
              {t.gameModal.provider}: <strong className="text-white">{game.providerName}</strong>
            </span>
            <span>
              {t.gameModal.category}: <strong className="text-white">{t.nav[game.category]}</strong>
            </span>
          </div>

          {/* Compliance notice per Section 14 */}
          <div className="rounded-xl bg-[#171B2B] border border-[#343D58] p-3 flex items-start gap-2.5 text-[12px] text-[#C1C9DC] leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#FFD028] shrink-0 mt-0.5" />
            <p>{t.gameModal.complianceBanner}</p>
          </div>

          {previewActive && (
            <div
              role="status"
              className="rounded-xl bg-[#1A223A] border border-[#6635FF]/60 p-3.5 text-center space-y-1"
            >
              <p className="text-[13px] font-semibold text-white">
                {t.gameModal.launchingDemo}
              </p>
              <p className="text-[11.5px] text-[#C1C9DC] font-mono">
                {game.destinationPath}
              </p>
            </div>
          )}

          <div className="flex items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setPreviewActive(true)}
              className="flex-1 h-[40px] rounded-full bg-[#FF3035] hover:bg-[#E52227] text-white text-[13.5px] font-bold inline-flex items-center justify-center gap-2 shadow-md shadow-[#FF3035]/25 transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t.gameModal.launchPreview}</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleFavorite(game.id)}
              aria-pressed={isFavorite}
              className={`h-[40px] px-4 rounded-full border text-[12.5px] font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-[#FFD028]/15 border-[#FFD028] text-[#FFD028]'
                  : 'bg-[#252D46] border-[#343D58] text-[#C1C9DC] hover:text-white'
              }`}
            >
              <Star className="w-4 h-4" fill={isFavorite ? '#FFD028' : 'none'} />
              <span className="hidden sm:inline">
                {isFavorite ? t.gameModal.favoritedBtn : t.gameModal.favoriteBtn}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
