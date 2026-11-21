import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGames,
  getWrappedSlideIndex,
  toggleFavoriteId,
  validateAuthForm,
} from './catalogLogic';
import type { GameItem } from '../types/gaming';

const SAMPLE_GAMES: GameItem[] = [
  {
    id: 'super-ace',
    titleBn: 'সুপার এইস',
    titleEn: 'Super Ace',
    providerId: 'jili',
    providerName: 'Jili',
    category: 'slots',
    image: '/img/super-ace.jpg',
    isHot: true,
    tags: ['hot', 'slot', 'cascade'],
    accentGradient: 'from-emerald-700 to-green-950',
    destinationPath: '/games/super-ace',
  },
  {
    id: 'aviator',
    titleBn: 'এভিয়েটর',
    titleEn: 'Aviator',
    providerId: 'spribe',
    providerName: 'Spribe',
    category: 'slots',
    image: '/img/aviator.jpg',
    isHot: true,
    tags: ['hot', 'crash'],
    accentGradient: 'from-red-700 to-zinc-950',
    destinationPath: '/games/aviator',
  },
  {
    id: 'golden-shark',
    titleBn: 'গোল্ডেন শার্ক',
    titleEn: 'Golden Shark',
    providerId: 'jdb',
    providerName: 'JDB',
    category: 'fishing',
    image: '/img/shark.jpg',
    isNew: true,
    tags: ['new', 'arcade'],
    accentGradient: 'from-cyan-700 to-blue-950',
    destinationPath: '/games/golden-shark',
  },
];

test('filterGames filters by category, provider, search query, and favorites', () => {
  const emptyFavs = new Set<string>();

  const slotsOnly = filterGames(SAMPLE_GAMES, {
    category: 'slots',
    favoriteIds: emptyFavs,
  });
  assert.equal(slotsOnly.length, 2);

  const jiliOnly = filterGames(SAMPLE_GAMES, {
    category: 'slots',
    providerId: 'jili',
    favoriteIds: emptyFavs,
  });
  assert.deepEqual(
    jiliOnly.map((g) => g.id),
    ['super-ace']
  );

  const bnSearch = filterGames(SAMPLE_GAMES, {
    searchQuery: 'এভিয়েটর',
    favoriteIds: emptyFavs,
  });
  assert.deepEqual(
    bnSearch.map((g) => g.id),
    ['aviator']
  );

  const enSearch = filterGames(SAMPLE_GAMES, {
    searchQuery: 'shark',
    favoriteIds: emptyFavs,
  });
  assert.deepEqual(
    enSearch.map((g) => g.id),
    ['golden-shark']
  );

  const favOnly = filterGames(SAMPLE_GAMES, {
    tag: 'favorites',
    favoriteIds: new Set(['aviator']),
  });
  assert.deepEqual(
    favOnly.map((g) => g.id),
    ['aviator']
  );
});

test('toggleFavoriteId adds and removes IDs immutably', () => {
  const initial = new Set<string>(['super-ace']);
  const added = toggleFavoriteId(initial, 'aviator');
  assert.equal(initial.has('aviator'), false);
  assert.equal(added.has('aviator'), true);
  assert.equal(added.has('super-ace'), true);

  const removed = toggleFavoriteId(added, 'super-ace');
  assert.equal(removed.has('super-ace'), false);
  assert.equal(removed.has('aviator'), true);
});

test('getWrappedSlideIndex wraps cleanly in both directions', () => {
  assert.equal(getWrappedSlideIndex(0, 1, 3), 1);
  assert.equal(getWrappedSlideIndex(2, 1, 3), 0);
  assert.equal(getWrappedSlideIndex(0, -1, 3), 2);
  assert.equal(getWrappedSlideIndex(0, 1, 0), 0);
});

test('validateAuthForm rejects empty/short credentials and validates register rules', () => {
  const emptyLogin = validateAuthForm({
    mode: 'login',
    username: '   ',
    password: '',
  });
  assert.equal(emptyLogin.valid, false);
  assert.equal(emptyLogin.errors.username, 'required');
  assert.equal(emptyLogin.errors.password, 'required');

  const validLogin = validateAuthForm({
    mode: 'login',
    username: 'player99',
    password: 'password123',
  });
  assert.equal(validLogin.valid, true);

  const badRegister = validateAuthForm({
    mode: 'register',
    username: 'user99',
    password: 'password123',
    confirmPassword: 'different',
    acceptedAgeTerms: false,
  });
  assert.equal(badRegister.valid, false);
  assert.equal(badRegister.errors.confirmPassword, 'mismatch');
  assert.equal(badRegister.errors.acceptedAgeTerms, 'required');

  const goodRegister = validateAuthForm({
    mode: 'register',
    username: 'user99',
    password: 'password123',
    confirmPassword: 'password123',
    acceptedAgeTerms: true,
  });
  assert.equal(goodRegister.valid, true);
});
