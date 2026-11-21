import { Search, X } from 'lucide-react';
import type {
  GameCategoryId,
  GameItem,
  LanguageCode,
  SubFilterTagId,
} from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { GAME_PROVIDERS, SUB_FILTER_TAGS } from '../data/categories';
import { ALL_GAMES } from '../data/games';
import { filterGames } from '../utils/catalogLogic';
import { GameGrid } from './GameGrid';

interface CategoryLobbyViewProps {
  category: GameCategoryId;
  selectedProviderId: string;
  selectedTag: SubFilterTagId;
  searchQuery: string;
  language: LanguageCode;
  t: TranslationDictionary;
  favoriteIds: ReadonlySet<string>;
  onSelectProvider: (providerId: string) => void;
  onSelectTag: (tag: SubFilterTagId) => void;
  onSearchChange: (value: string) => void;
  onToggleFavorite: (gameId: string) => void;
  onSelectGame: (game: GameItem) => void;
  onResetFilters: () => void;
}

export function CategoryLobbyView({
  category,
  selectedProviderId,
  selectedTag,
  searchQuery,
  language,
  t,
  favoriteIds,
  onSelectProvider,
  onSelectTag,
  onSearchChange,
  onToggleFavorite,
  onSelectGame,
  onResetFilters,
}: CategoryLobbyViewProps) {
  const categoryProviders =
    category === 'slots'
      ? GAME_PROVIDERS.filter((p) => p.categories.includes('slots'))
      : GAME_PROVIDERS.filter((p) => p.categories.includes(category));

  const activeProvider =
    selectedProviderId === 'all'
      ? null
      : categoryProviders.find((p) => p.id === selectedProviderId) ?? null;

  const filteredGames = filterGames(ALL_GAMES, {
    category,
    providerId: selectedProviderId,
    tag: selectedTag,
    searchQuery,
    favoriteIds,
  });

  return (
    <section aria-label={`${t.nav[category]} Lobby`} className="pb-12">
      {/* Provider Selector Grid Panel (matching Screenshot 1) */}
      <div className="max-w-[784px] mx-auto px-3 sm:px-4">
        <div className="rounded-xl bg-[#1E253B] border border-[#2D3654]/80 p-3 sm:p-4 shadow-md shadow-black/25">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {/* All Providers Toggle */}
            <button
              type="button"
              onClick={() => onSelectProvider('all')}
              className={`h-[38px] px-2.5 rounded-lg flex items-center gap-2 text-left transition-all duration-150 cursor-pointer ${
                selectedProviderId === 'all'
                  ? 'bg-[#E5282D] text-white font-semibold shadow-sm shadow-[#FF3035]/35'
                  : 'bg-[#313B58] hover:bg-[#3A4668] text-[#D8E0F0] font-medium'
              }`}
            >
              <span className="w-6 h-5 rounded bg-black/25 flex items-center justify-center text-[9px] font-black tracking-tight shrink-0">
                ALL
              </span>
              <span className="text-[11px] leading-tight truncate">
                {t.allProviders}
              </span>
            </button>

            {categoryProviders.map((provider) => {
              const isSelected = selectedProviderId === provider.id;
              return (
                <button
                  key={provider.id}
                  type="button"
                  onClick={() => onSelectProvider(provider.id)}
                  className={`h-[38px] px-2 rounded-lg flex items-center gap-1.5 text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#E5282D] text-white font-semibold shadow-sm shadow-[#FF3035]/35'
                      : 'bg-[#313B58] hover:bg-[#3A4668] text-[#D8E0F0] font-medium'
                  }`}
                >
                  <span
                    className="w-7 h-5 rounded bg-[#1A2034]/75 flex items-center justify-center text-[8.5px] font-black tracking-tight shrink-0"
                    style={{ color: isSelected ? '#FFFFFF' : provider.accentColor }}
                  >
                    {provider.shortCode}
                  </span>
                  <span className="min-w-0 flex-1 text-[10.5px] leading-[1.2] truncate">
                    {provider.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Provider Header + Game Search Box (matching Screenshot 1 bottom bar) */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded bg-[#252D46] border border-[#343D58] text-[10px] font-black text-white">
              {activeProvider ? activeProvider.shortCode : 'SAMIR99'}
            </span>
            <h1 className="text-[15px] font-bold text-[#FF3035]">
              {activeProvider ? activeProvider.name : t.nav[category]}
            </h1>
            <span className="text-[12px] text-[#8993AC] tabular-nums">
              · {filteredGames.length}
            </span>
          </div>

          <div className="relative w-full sm:w-[230px]">
            <label htmlFor="ba99-game-search" className="sr-only">
              {t.searchPlaceholder}
            </label>
            <input
              id="ba99-game-search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full h-[34px] pl-3 pr-14 rounded-lg bg-[#232B42] border border-[#343D58] text-[12.5px] text-white placeholder:text-[#8993AC] focus:border-[#FF3035] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                className="absolute right-8 top-1/2 -translate-y-1/2 text-[#8993AC] hover:text-white p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <span
              className="absolute right-0 top-0 bottom-0 w-8 rounded-r-lg bg-[#313B58] flex items-center justify-center text-[#C1C9DC] pointer-events-none"
              aria-hidden="true"
            >
              <Search className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Sub-category Tag Filter Bar (matching Screenshots 1 & 3) */}
        <div
          className="mt-3.5 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1.5"
          role="tablist"
          aria-label="Game Sub-Categories"
        >
          {SUB_FILTER_TAGS.map((tagId) => {
            const isSelected = selectedTag === tagId;
            return (
              <button
                key={tagId}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectTag(tagId)}
                className={`px-2.5 py-1 rounded-full text-[11.5px] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF3035] text-white font-semibold shadow-sm shadow-[#FF3035]/30'
                    : 'text-[#C1C9DC] hover:text-white hover:bg-[#252D46] font-medium'
                }`}
              >
                {t.tags[tagId]}
                {tagId === 'favorites' && favoriteIds.size > 0
                  ? ` (${favoriteIds.size})`
                  : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered 6-Column Game Grid */}
      <GameGrid
        games={filteredGames}
        language={language}
        t={t}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
        onSelectGame={onSelectGame}
        onResetFilters={onResetFilters}
      />
    </section>
  );
}
