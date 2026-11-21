import type { OfferItem } from '../types/gaming';
import { ASSETS } from './assets';

export const PLATFORM_OFFERS: OfferItem[] = [
  {
    id: 'offer-daily-events',
    category: 'all',
    titleBn: 'দৈনিক কমিউনিটি টুর্নামেন্ট প্রিভিউ',
    titleEn: 'Daily Community Tournament Showcase',
    titleHi: 'दैनिक कम्युनिटी टूर्नामेंट प्रीव्यू',
    summaryBn:
      'জনপ্রিয় স্লট এবং আর্কেড শিরোনামে প্রতিদিন নতুন লিডারবোর্ড ইভেন্ট ও থিম চ্যালেঞ্জ দেখুন।',
    summaryEn:
      'Discover rotating leaderboard events and themed challenges across featured slot and arcade titles.',
    summaryHi:
      'लोकप्रिय स्लॉट और आर्केड गेम में प्रतिदिन नए लीडरबोर्ड इवेंट देखें।',
    highlight: 'DAILY',
    image: ASSETS.banners.poseidon,
  },
  {
    id: 'offer-providers-fest',
    category: 'slots',
    titleBn: 'Jili ও PG Soft ফিচার্ড গেম উৎসব',
    titleEn: 'Jili & PG Soft Featured Showcase',
    titleHi: 'Jili और PG Soft फीचर्ड फेस्टिवल',
    summaryBn:
      'নতুন রিলিজ হওয়া স্লট এবং ক্লাসিক ফেভারিট গেমগুলো এক ক্লিকেই প্রিভিউ ও বুকমার্ক করুন।',
    summaryEn:
      'Explore newly added releases and fan-favorite titles with instant demo preview and bookmarking.',
    summaryHi:
      'नई रिलीज़ और पसंदीदा स्लॉट गेम्स को एक क्लिक में देखें और बुकमार्क करें।',
    highlight: 'SLOTS',
    image: ASSETS.banners.vipCarnival,
  },
  {
    id: 'offer-sports-live',
    category: 'sports',
    titleBn: 'স্পোর্টস ও লাইভ এরিনা হাইলাইটস',
    titleEn: 'Sports & Live Arena Highlights',
    titleHi: 'स्पोर्ट्स और लाइव एरीना हाइलाइट्स',
    summaryBn:
      'আন্তর্জাতিক ম্যাচ শিডিউল এবং লাইভ স্টুডিও লবির সর্বশেষ আপডেট জানুন সরাসরি ড্যাশবোর্ডে।',
    summaryEn:
      'Follow international match schedules and live studio lobby showcases directly from your dashboard.',
    summaryHi:
      'डैशबोर्ड पर सीधे अंतर्राष्ट्रीय मैच शेड्यूल और लाइव लॉबी अपडेट देखें।',
    highlight: 'LIVE',
    image: ASSETS.banners.sportsArena,
  },
];
