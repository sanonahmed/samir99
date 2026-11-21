import { useState } from 'react';
import { Gamepad2, Star } from 'lucide-react';
import type { GameItem, LanguageCode } from '../types/gaming';

interface GameCardProps {
  game: GameItem;
  language: LanguageCode;
  isFavorite: boolean;
  favoriteAddLabel: string;
  favoriteRemoveLabel: string;
  onToggleFavorite: (gameId: string) => void;
  onSelectGame: (game: GameItem) => void;
}

export function GameCard({
  game,
  language,
  isFavorite,
  favoriteAddLabel,
  favoriteRemoveLabel,
  onToggleFavorite,
  onSelectGame,
}: GameCardProps) {
  const [imgError, setImgError] = useState(false);

  const displayTitle = language === 'bn' ? game.titleBn : game.titleEn;

  return (
    <article
      className="group relative rounded-[12px] overflow-hidden bg-[#252D46] border border-[#2F3957]/60 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF3035]/70 hover:shadow-lg hover:shadow-[#FF3035]/20"
      data-testid={`game-card-${game.id}`}
    >
      {/* Favorite Star Toggle (sibling button for valid accessible DOM nesting) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(game.id);
        }}
        aria-pressed={isFavorite}
        aria-label={`${isFavorite ? favoriteRemoveLabel : favoriteAddLabel}: ${displayTitle}`}
        className={`absolute top-1.5 right-1.5 z-20 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${
          isFavorite
            ? 'bg-black/65 text-[#FFD028] scale-105'
            : 'bg-black/45 text-white/75 hover:bg-black/70 hover:text-white'
        }`}
      >
        <Star
          className="w-3.5 h-3.5"
          fill={isFavorite ? '#FFD028' : 'currentColor'}
          strokeWidth={1.8}
        />
      </button>

      {/* Clickable Card Surface */}
      <button
        type="button"
        onClick={() => onSelectGame(game)}
        className="w-full text-left block focus-visible:outline-none cursor-pointer"
      >
        {/* 1:1 Square Thumbnail */}
        <div
          className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br ${game.accentGradient}`}
        >
          {!imgError ? (
            <img
              src={game.image}
              alt={`${displayTitle} — ${game.providerName}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
                game.thumbnailCrop
                  ? 'scale-[1.32] group-hover:scale-[1.38]'
                  : 'group-hover:scale-105'
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
              <Gamepad2 className="w-8 h-8 text-white/80 mb-1.5" />
              <span className="text-[11px] font-bold text-white leading-tight line-clamp-2">
                {displayTitle}
              </span>
            </div>
          )}

          {/* Subtle Provider Corner Mark matching Screenshot 4 */}
          {game.badge && (
            <span
              className={`absolute bottom-1.5 right-1.5 px-1.5 py-[1px] rounded text-[9px] font-black tracking-wider uppercase shadow ${
                game.badge === 'BUY'
                  ? 'bg-[#6635FF] text-white'
                  : 'bg-[#E52227] text-white'
              }`}
            >
              {game.badge}
            </span>
          )}
        </div>

        {/* Centered Title & Provider Metadata */}
        <div className="px-1.5 py-2 text-center bg-[#252D46]">
          <h3 className="text-[11.5px] sm:text-[12px] font-semibold text-white truncate leading-[1.3]">
            {displayTitle}
          </h3>
          <p className="text-[10px] sm:text-[10.5px] text-[#C1C9DC] truncate mt-0.5 leading-[1.2]">
            {game.providerName}
          </p>
        </div>
      </button>
    </article>
  );
}
