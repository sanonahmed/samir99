import type { LanguageCode, NavSectionId, SupportChannel } from '../types/gaming';

export interface SidebarNavItem {
  id: NavSectionId;
  hasChevron?: boolean;
  multilineBn?: boolean;
}

/**
 * Exact 10 navigation destinations in the left sidebar matching the BA99 reference screenshots
 * (followed by the 11th item: Language Selector at the bottom of the list).
 */
export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { id: 'home' },
  { id: 'slots' },
  { id: 'fishing' },
  { id: 'live' },
  { id: 'poker' },
  { id: 'sports' },
  { id: 'lottery' },
  { id: 'offers' },
  { id: 'app', multilineBn: true },
  { id: 'support', hasChevron: true },
];

export const MOBILE_BOTTOM_NAV_IDS: NavSectionId[] = [
  'home',
  'slots',
  'live',
  'offers',
  'support',
];

export interface LanguageOption {
  code: LanguageCode;
  nativeLabel: string;
  flagType: 'bd' | 'uk' | 'in';
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'bn', nativeLabel: 'বাংলা', flagType: 'bd' },
  { code: 'en', nativeLabel: 'English', flagType: 'uk' },
  { code: 'hi', nativeLabel: 'हिन्दी', flagType: 'in' },
];

/**
 * Configurable support destinations (no invented third-party contact URLs).
 */
export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'livechat',
    labelBn: 'লাইভ চ্যাট',
    labelEn: 'Live Chat',
    labelHi: 'लाइव चैट',
    descriptionBn: 'তাৎক্ষণিক সহায়তার জন্য ২৪/৭ অনলাইন সাপোর্ট এজেন্টের সাথে যুক্ত হন।',
    descriptionEn: 'Connect with a 24/7 online support specialist for immediate assistance.',
    descriptionHi: 'तत्काल सहायता के लिए 24/7 ऑनलाइन सपोर्ट से जुड़ें।',
    configHref: '#support-livechat',
    bgClass: 'from-[#6D42FF] to-[#4A1FE0]',
  },
  {
    id: 'telegram',
    labelBn: 'টেলিগ্রাম',
    labelEn: 'Telegram',
    labelHi: 'टेलीग्राम',
    descriptionBn: 'অফিশিয়াল টেলিগ্রাম সাপোর্ট ও আপডেট চ্যানেলে মেসেজ পাঠান।',
    descriptionEn: 'Reach our official Telegram support desk and announcement channel.',
    descriptionHi: 'हमारे आधिकारिक टेलीग्राम सहायता चैनल पर संदेश भेजें।',
    configHref: '#support-telegram',
    bgClass: 'from-[#2AABEE] to-[#1D8CC8]',
  },
  {
    id: 'whatsapp',
    labelBn: 'হোয়াটসঅ্যাপ',
    labelEn: 'WhatsApp',
    labelHi: 'व्हाट्सएप',
    descriptionBn: 'হোয়াটসঅ্যাপের মাধ্যমে দ্রুত অ্যাকাউন্ট ও অ্যাপ সহায়তা পান।',
    descriptionEn: 'Get quick account and mobile app guidance via WhatsApp support.',
    descriptionHi: 'व्हाट्सएप के माध्यम से त्वरित सहायता प्राप्त करें।',
    configHref: '#support-whatsapp',
    bgClass: 'from-[#28D869] to-[#1DA952]',
  },
];
