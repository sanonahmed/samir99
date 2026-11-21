import { SearchX } from 'lucide-react';
import type { GameItem, LanguageCode } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: GameItem[];
  language: LanguageCode;
  t: TranslationDictionary;
  favoriteIds: ReadonlySet<string>;
  onToggleFavorite: (gameId: string) => void;
  onSelectGame: (game: GameItem) => void;
  onResetFilters?: () => void;
}

export function GameGrid({
  games,
  language,
  t,
  favoriteIds,
  onToggleFavorite,
  onSelectGame,
  onResetFilters,
}: GameGridProps) {
  if (games.length === 0) {
    return (
      <div
        className="max-w-[784px] mx-auto px-3 sm:px-4"
        data-testid="game-grid-empty"
      >
        <div className="rounded-xl bg-[#222A42] border border-[#343D58] py-12 px-6 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#171B2B] flex items-center justify-center text-[#8993AC] mb-3">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-[16px] font-semibold text-white">{t.noGamesTitle}</h3>
          <p className="text-[13px] text-[#C1C9DC] mt-1 max-w-md">{t.noGamesSubtitle}</p>
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-4 px-5 py-2 rounded-full bg-[#FF3035] hover:bg-[#E6252A] text-white text-[13px] font-semibold transition-colors cursor-pointer"
            >
              {t.resetFilters}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="max-w-[784px] mx-auto px-3 sm:px-4"
      data-testid="game-grid"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            language={language}
            isFavorite={favoriteIds.has(game.id)}
            favoriteAddLabel={t.favoriteAdd}
            favoriteRemoveLabel={t.favoriteRemove}
            onToggleFavorite={onToggleFavorite}
            onSelectGame={onSelectGame}
          />
        ))}
      </div>
    </div>
  );
}
