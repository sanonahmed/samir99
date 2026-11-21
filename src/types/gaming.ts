export type LanguageCode = 'bn' | 'en' | 'hi';

export type GameCategoryId =
  | 'slots'
  | 'fishing'
  | 'live'
  | 'poker'
  | 'sports'
  | 'esports'
  | 'cockfight'
  | 'lottery';

export type MobileRailTabId = 'hot' | GameCategoryId;

export type NavSectionId =
  | 'home'
  | GameCategoryId
  | 'offers'
  | 'app'
  | 'support';

export type SubFilterTagId =
  | 'all'
  | 'favorites'
  | 'new'
  | 'hot'
  | 'recent'
  | 'reel3'
  | 'reel5'
  | 'arcade'
  | 'bingo'
  | 'bonus'
  | 'cascade'
  | 'crash'
  | 'buyFeature'
  | 'freeSpin'
  | 'jackpot'
  | 'megaways'
  | 'respin'
  | 'scratch'
  | 'slot'
  | 'videoPoker';

export interface GameItem {
  id: string;
  titleBn: string;
  titleEn: string;
  providerId: string;
  providerName: string;
  category: GameCategoryId;
  image: string;
  isHot?: boolean;
  isNew?: boolean;
  tags: SubFilterTagId[];
  badge?: string;
  thumbnailCrop?: boolean;
  accentGradient: string;
  destinationPath: string;
}

export interface CategoryItem {
  id: GameCategoryId;
  labelBn: string;
  labelEn: string;
  labelHi: string;
  image: string;
  accentGradient: string;
}

export interface ProviderItem {
  id: string;
  name: string;
  shortCode: string;
  accentColor: string;
  categories: GameCategoryId[];
}

export interface BannerSlide {
  id: string;
  image: string;
  eyebrowBn: string;
  eyebrowEn: string;
  eyebrowHi: string;
  highlightNumber: string;
  headlineBn: string;
  headlineEn: string;
  headlineHi: string;
  sublineBn: string;
  sublineEn: string;
  sublineHi: string;
  ctaSection: NavSectionId;
}

export interface SupportChannel {
  id: 'livechat' | 'telegram' | 'whatsapp';
  labelBn: string;
  labelEn: string;
  labelHi: string;
  descriptionBn: string;
  descriptionEn: string;
  descriptionHi: string;
  configHref: string;
  bgClass: string;
}

export interface OfferItem {
  id: string;
  category: GameCategoryId | 'all';
  titleBn: string;
  titleEn: string;
  titleHi: string;
  summaryBn: string;
  summaryEn: string;
  summaryHi: string;
  highlight: string;
  image: string;
}
