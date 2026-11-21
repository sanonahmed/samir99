import type { GameCategoryId, GameItem, SubFilterTagId } from '../types/gaming';

export interface GameFilterCriteria {
  category?: GameCategoryId | 'all';
  providerId?: string | 'all';
  tag?: SubFilterTagId;
  searchQuery?: string;
  favoriteIds: ReadonlySet<string>;
}

/**
 * Filters a list of games by category, provider, sub-filter tag (including favorites),
 * and case-insensitive search query across Bengali title, English title, and provider name.
 */
export function filterGames(
  games: readonly GameItem[],
  criteria: GameFilterCriteria
): GameItem[] {
  const normalizedQuery = (criteria.searchQuery ?? '').trim().toLowerCase();

  return games.filter((game) => {
    if (criteria.category && criteria.category !== 'all' && game.category !== criteria.category) {
      return false;
    }

    if (criteria.providerId && criteria.providerId !== 'all' && game.providerId !== criteria.providerId) {
      return false;
    }

    if (criteria.tag && criteria.tag !== 'all') {
      if (criteria.tag === 'favorites') {
        if (!criteria.favoriteIds.has(game.id)) {
          return false;
        }
      } else if (criteria.tag === 'hot') {
        if (!game.isHot && !game.tags.includes('hot')) {
          return false;
        }
      } else if (criteria.tag === 'new') {
        if (!game.isNew && !game.tags.includes('new')) {
          return false;
        }
      } else if (!game.tags.includes(criteria.tag)) {
        return false;
      }
    }

    if (normalizedQuery.length > 0) {
      const matchesBn = game.titleBn.toLowerCase().includes(normalizedQuery);
      const matchesEn = game.titleEn.toLowerCase().includes(normalizedQuery);
      const matchesProvider = game.providerName.toLowerCase().includes(normalizedQuery);
      if (!matchesBn && !matchesEn && !matchesProvider) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Pure toggle helper for favorite game IDs, returning a new Set instance.
 */
export function toggleFavoriteId(
  currentFavorites: ReadonlySet<string>,
  gameId: string
): Set<string> {
  const next = new Set(currentFavorites);
  if (next.has(gameId)) {
    next.delete(gameId);
  } else {
    next.add(gameId);
  }
  return next;
}

/**
 * Computes the next or previous slide index with clean wrap-around.
 */
export function getWrappedSlideIndex(
  currentIndex: number,
  delta: number,
  totalSlides: number
): number {
  if (totalSlides <= 0) {
    return 0;
  }
  return ((currentIndex + delta) % totalSlides + totalSlides) % totalSlides;
}

export interface AuthFormInput {
  mode: 'login' | 'register';
  username: string;
  password: string;
  confirmPassword?: string;
  acceptedAgeTerms?: boolean;
}

export interface AuthValidationResult {
  valid: boolean;
  errors: {
    username?: 'required' | 'tooShort';
    password?: 'required' | 'tooShort';
    confirmPassword?: 'mismatch';
    acceptedAgeTerms?: 'required';
  };
}

/**
 * Validates Login and Registration form inputs without silently substituting fallback values.
 */
export function validateAuthForm(input: AuthFormInput): AuthValidationResult {
  const errors: AuthValidationResult['errors'] = {};
  const trimmedUser = input.username.trim();

  if (trimmedUser.length === 0) {
    errors.username = 'required';
  } else if (trimmedUser.length < 4) {
    errors.username = 'tooShort';
  }

  if (input.password.length === 0) {
    errors.password = 'required';
  } else if (input.password.length < 6) {
    errors.password = 'tooShort';
  }

  if (input.mode === 'register') {
    if (input.confirmPassword !== input.password) {
      errors.confirmPassword = 'mismatch';
    }
    if (!input.acceptedAgeTerms) {
      errors.acceptedAgeTerms = 'required';
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
