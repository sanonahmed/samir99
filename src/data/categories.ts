import type { CategoryItem, MobileRailTabId, ProviderItem, SubFilterTagId } from '../types/gaming';
import { ASSETS } from './assets';

export const GAME_CATEGORIES: CategoryItem[] = [
  {
    id: 'slots',
    labelBn: 'স্লট',
    labelEn: 'Slots',
    labelHi: 'स्लॉट',
    image: ASSETS.categories.slots,
    accentGradient: 'from-purple-900 via-indigo-950 to-slate-950',
  },
  {
    id: 'fishing',
    labelBn: 'ফিশিং',
    labelEn: 'Fishing',
    labelHi: 'फिशिंग',
    image: ASSETS.categories.fishing,
    accentGradient: 'from-cyan-900 via-blue-950 to-slate-950',
  },
  {
    id: 'live',
    labelBn: 'লাইভ',
    labelEn: 'Live',
    labelHi: 'लाइव',
    image: ASSETS.categories.live,
    accentGradient: 'from-amber-900 via-stone-950 to-slate-950',
  },
  {
    id: 'poker',
    labelBn: 'পোকার',
    labelEn: 'Poker',
    labelHi: 'पोकर',
    image: ASSETS.categories.poker,
    accentGradient: 'from-blue-900 via-indigo-950 to-slate-950',
  },
  {
    id: 'sports',
    labelBn: 'স্পোর্টস',
    labelEn: 'Sports',
    labelHi: 'स्पोर्ट्स',
    image: ASSETS.categories.sports,
    accentGradient: 'from-sky-900 via-slate-900 to-slate-950',
  },
  {
    id: 'lottery',
    labelBn: 'লটারি',
    labelEn: 'Lottery',
    labelHi: 'लॉटरी',
    image: ASSETS.categories.lottery,
    accentGradient: 'from-amber-800 via-teal-950 to-slate-950',
  },
];

/**
 * Mobile vertical icon rail order matching Screenshots 3, 4, and 5.
 */
export const MOBILE_RAIL_TABS: MobileRailTabId[] = [
  'hot',
  'slots',
  'fishing',
  'live',
  'poker',
  'sports',
  'esports',
  'cockfight',
  'lottery',
];

/**
 * Full provider roster matching both desktop and mobile 5-column provider logos grid.
 */
export const GAME_PROVIDERS: ProviderItem[] = [
  { id: 'playtech', name: 'Playtech', shortCode: 'PT', accentColor: '#38BDF8', categories: ['slots', 'live'] },
  { id: 'ameba', name: 'Ameba', shortCode: 'AE', accentColor: '#A78BFA', categories: ['slots'] },
  { id: 'wazdan', name: 'Wazdan', shortCode: 'WZ', accentColor: '#F472B6', categories: ['slots'] },
  { id: 'pp', name: 'Pragmatic Play', shortCode: 'PP', accentColor: '#FB923C', categories: ['slots', 'live'] },
  { id: 'caleta', name: 'Caleta', shortCode: 'CG', accentColor: '#22D3EE', categories: ['slots', 'lottery'] },
  { id: 'microgaming', name: 'Microgaming', shortCode: 'MG', accentColor: '#34D399', categories: ['slots', 'live'] },

  { id: 'netent', name: 'NetEnt', shortCode: 'NE', accentColor: '#4ADE80', categories: ['slots'] },
  { id: 'jdb', name: 'JDB', shortCode: 'JDB', accentColor: '#FACC15', categories: ['slots', 'fishing'] },
  { id: 'booming', name: 'Booming Games', shortCode: 'BG', accentColor: '#F87171', categories: ['slots'] },
  { id: 'pgsoft', name: 'PG Soft', shortCode: 'PG', accentColor: '#E2E8F0', categories: ['slots'] },
  { id: 'mega', name: 'Mega', shortCode: 'ME', accentColor: '#FBBF24', categories: ['slots'] },
  { id: 'joker', name: 'Joker', shortCode: 'JK', accentColor: '#FDE047', categories: ['slots', 'fishing'] },

  { id: 'jili', name: 'Jili', shortCode: 'JILI', accentColor: '#F59E0B', categories: ['slots', 'fishing', 'poker'] },
  { id: 'fachai', name: 'FA CHAI', shortCode: 'FC', accentColor: '#EF4444', categories: ['slots', 'fishing'] },
  { id: 'spadegaming', name: 'Spadegaming', shortCode: 'SG', accentColor: '#FB7185', categories: ['slots', 'fishing'] },
  { id: 'askmeslot', name: 'Askmeslot', shortCode: 'AM', accentColor: '#38BDF8', categories: ['slots'] },
  { id: 'funta', name: 'FTG', shortCode: 'FTG', accentColor: '#818CF8', categories: ['slots'] },
  { id: 'kagaming', name: 'KA Gaming', shortCode: 'KA', accentColor: '#F87171', categories: ['slots', 'fishing'] },

  { id: 'bng', name: 'BNG', shortCode: 'BNG', accentColor: '#2DD4BF', categories: ['slots'] },
  { id: 'rich88', name: 'RICH88', shortCode: 'R88', accentColor: '#C084FC', categories: ['slots', 'poker'] },
  { id: 'playstar', name: 'PLAYSTAR', shortCode: 'PS', accentColor: '#60A5FA', categories: ['slots', 'fishing'] },
  { id: 'yellowbat', name: 'YELLOW BAT', shortCode: 'YB', accentColor: '#FACC15', categories: ['slots', 'fishing'] },
  { id: 'firstperson', name: 'First Person', shortCode: 'FP', accentColor: '#CBD5E1', categories: ['slots', 'live'] },
  { id: 'bigtime', name: 'BigTimeGaming', shortCode: 'BTG', accentColor: '#F43F5E', categories: ['slots'] },

  { id: 'nolimit', name: 'NoLimit City', shortCode: 'NLC', accentColor: '#FDE047', categories: ['slots'] },
  { id: 'redtiger', name: 'Red Tiger', shortCode: 'RT', accentColor: '#EF4444', categories: ['slots'] },
  { id: 'mas', name: 'Mascot', shortCode: 'MAS', accentColor: '#94A3B8', categories: ['slots'] },
  { id: 'spribe', name: 'Spribe', shortCode: 'SPR', accentColor: '#E2E8F0', categories: ['slots', 'sports'] },
  { id: 'btgaming', name: 'BT Gaming', shortCode: 'BT', accentColor: '#FBBF24', categories: ['slots'] },
  { id: 'gemini', name: 'Gemini', shortCode: 'GM', accentColor: '#38BDF8', categories: ['slots', 'lottery'] },

  { id: 'avatarux', name: 'AvatarUX', shortCode: 'AUX', accentColor: '#A855F7', categories: ['slots'] },
  { id: 'relax', name: 'Relax Gaming', shortCode: 'RLX', accentColor: '#CBD5E1', categories: ['slots'] },
  { id: 'hacksaw', name: 'Hacksaw', shortCode: 'HS', accentColor: '#F8FAFC', categories: ['slots'] },
  { id: 'smartsoft', name: 'Smartsoft', shortCode: 'SS', accentColor: '#FB7185', categories: ['slots'] },
  { id: 'naga', name: 'Naga Games', shortCode: 'NG', accentColor: '#34D399', categories: ['slots'] },
  { id: 'yggdrasil', name: 'Yggdrasil', shortCode: 'YG', accentColor: '#60A5FA', categories: ['slots'] },

  { id: 'fastspin', name: 'Fastspin', shortCode: 'FS', accentColor: '#F87171', categories: ['slots'] },
  { id: 'nextspin', name: 'Nextspin', shortCode: 'NS', accentColor: '#38BDF8', categories: ['slots'] },
  { id: 'live22', name: 'Live22', shortCode: 'L22', accentColor: '#38BDF8', categories: ['slots', 'live'] },
  { id: 'octoplay', name: 'Octoplay', shortCode: 'OP', accentColor: '#818CF8', categories: ['slots'] },
  { id: 'amigo', name: 'Amigo', shortCode: 'AG', accentColor: '#FBBF24', categories: ['slots'] },
  { id: 'bgaming', name: 'BGaming', shortCode: 'BGM', accentColor: '#F59E0B', categories: ['slots'] },

  { id: 'evoplay', name: 'Evoplay', shortCode: 'EVP', accentColor: '#38BDF8', categories: ['slots', 'esports'] },
  { id: 'kingmidas', name: 'KingMidas', shortCode: 'KM', accentColor: '#FACC15', categories: ['poker', 'lottery'] },
  { id: 'evolution', name: 'Evolution', shortCode: 'EVO', accentColor: '#38BDF8', categories: ['live', 'poker'] },
  { id: 'sagaming', name: 'SA Gaming', shortCode: 'SA', accentColor: '#F59E0B', categories: ['live'] },
  { id: 'ezugi', name: 'Ezugi', shortCode: 'EZG', accentColor: '#F8FAFC', categories: ['live'] },
  { id: 'saba', name: 'SABA Sports', shortCode: 'SB', accentColor: '#60A5FA', categories: ['sports', 'esports'] },
  { id: 'iaesports', name: 'IA E-Sports', shortCode: 'IA', accentColor: '#F97316', categories: ['esports'] },
  { id: 'svenus', name: 'SVenus', shortCode: 'SV', accentColor: '#FACC15', categories: ['cockfight'] },
];

export const SUB_FILTER_TAGS: SubFilterTagId[] = [
  'all',
  'favorites',
  'new',
  'hot',
  'recent',
  'reel3',
  'reel5',
  'arcade',
  'bingo',
  'bonus',
  'cascade',
  'crash',
  'buyFeature',
  'freeSpin',
  'jackpot',
  'megaways',
  'respin',
  'scratch',
  'slot',
  'videoPoker',
];
