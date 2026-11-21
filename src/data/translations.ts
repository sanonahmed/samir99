import type { LanguageCode, MobileRailTabId, NavSectionId, SubFilterTagId } from '../types/gaming';

export interface TranslationDictionary {
  langLabel: string;
  login: string;
  register: string;
  registerShort: string;
  hotGames: string;
  announcement: string;
  searchPlaceholder: string;
  allProviders: string;
  noGamesTitle: string;
  noGamesSubtitle: string;
  resetFilters: string;
  favoriteAdd: string;
  favoriteRemove: string;
  appHeading: string;
  appDescription: string;
  appDownloadBtn: string;
  androidApp: string;
  iosLiteApp: string;
  offersHeading: string;
  offersSubtitle: string;
  offersDemoNote: string;
  footerNotice1: string;
  footerNotice2: string;
  copyright: string;
  nav: Record<NavSectionId, string>;
  rail: Record<MobileRailTabId, string>;
  mobileExtra: {
    deposit: string;
    withdraw: string;
    vip: string;
    supportShort: string;
    appShort: string;
    bottomHome: string;
    bottomPromotion: string;
    bottomInvite: string;
    bottomMember: string;
    jackpotLabel: string;
    jackpotDemoNote: string;
    androidBtn: string;
    iosBtn: string;
    eventBadge: string;
    walletTitle: string;
    walletDepositTitle: string;
    walletWithdrawTitle: string;
    walletNotice: string;
    vipTitle: string;
    vipSubtitle: string;
    inviteTitle: string;
    inviteSubtitle: string;
    inviteCodeLabel: string;
    inviteCopyBtn: string;
    inviteCopied: string;
    memberTitle: string;
    memberGuest: string;
    memberFavorites: string;
    memberLanguage: string;
    memberQuickSupport: string;
  };
  tags: Record<SubFilterTagId, string>;
  auth: {
    loginTitle: string;
    registerTitle: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    ageTerms: string;
    submitLogin: string;
    submitRegister: string;
    switchToRegister: string;
    switchToLogin: string;
    demoComplianceNote: string;
    demoSuccessLogin: string;
    demoSuccessRegister: string;
    errUsernameRequired: string;
    errUsernameShort: string;
    errPasswordRequired: string;
    errPasswordShort: string;
    errPasswordMismatch: string;
    errAgeRequired: string;
  };
  gameModal: {
    provider: string;
    category: string;
    launchPreview: string;
    launchingDemo: string;
    close: string;
    complianceBanner: string;
    favoriteBtn: string;
    favoritedBtn: string;
  };
  supportModal: {
    title: string;
    subtitle: string;
    openChannel: string;
    configNotice: string;
    hoursLabel: string;
    hoursValue: string;
  };
  mobile: {
    menuOpen: string;
    menuClose: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  bn: {
    langLabel: 'বাংলা',
    login: 'লগইন',
    register: 'নিবন্ধন করুন',
    registerShort: 'নিবন্ধন',
    hotGames: 'গরম খেলা',
    announcement:
      'SAMIR99.COM— বিশ্বব্যাপী শীর্ষস্থানীয় নিরাপদ বিনোদন গেমিং প্ল্যাটফর্ম। সর্বশেষ অফার এবং নতুন গেম সম্পর্কে জানতে আমাদের সাথেই থাকুন!',
    searchPlaceholder: 'খেলার নাম',
    allProviders: 'সব প্রোভাইডার',
    noGamesTitle: 'কোনো খেলা পাওয়া যায়নি',
    noGamesSubtitle: 'অন্য প্রোভাইডার বা ফিল্টার নির্বাচন করুন অথবা অনুসন্ধান পরিবর্তন করুন।',
    resetFilters: 'ফিল্টার রিসেট করুন',
    favoriteAdd: 'প্রিয় তালিকায় যোগ করুন',
    favoriteRemove: 'প্রিয় তালিকা থেকে সরান',
    appHeading: 'অ্যাপ্লিকেশন',
    appDescription:
      'আপনার ফোনের জন্য এখনই অ্যাপটি ডাউনলোড করুন একটি ভালো এবং নিরাপদ গেমিং অভিজ্ঞতার জন্য, অ্যাপটি সব পণ্যকে সমর্থন করে: স্পোর্টস, ই-স্পোর্টস, ক্যাসিনো, গেমস এবং লটারি।',
    appDownloadBtn: 'এপ্লিকেশন ডাউনলোড',
    androidApp: 'Android APP',
    iosLiteApp: 'IOS LITE-APP',
    offersHeading: 'বিশেষ অফার',
    offersSubtitle: 'প্ল্যাটফর্মের সাম্প্রতিক ইভেন্ট এবং প্রদর্শনী অফারসমূহ দেখুন।',
    offersDemoNote:
      'প্রদর্শনী মোড: প্রকৃত অর্থের লেনদেন এবং বোনাস দাবি প্রযোজ্য লাইসেন্সিং ও বয়স যাচাই সম্পন্ন না হওয়া পর্যন্ত নিষ্ক্রিয় রয়েছে।',
    footerNotice1:
      '১৮ বছরের নিচে (অথবা অঞ্চলের উপর নির্ভর করে ন্যূনতম বৈধ বয়সের নিচে) কেউ আমাদের ওয়েবসাইটে একটি অ্যাকাউন্ট খুলতে এবং গেম খেলতে পারবেন না। কোম্পানি যে কোনো গ্রাহকের বয়সের প্রমাণ চাওয়ার অধিকার সংরক্ষণ করে এবং যথাযথ যাচাই না হওয়া পর্যন্ত অ্যাকাউন্ট স্থগিত করতে পারে।',
    footerNotice2:
      '১৮ বছরের নিচে (অথবা অঞ্চলের উপর নির্ভর করে ন্যূনতম বৈধ বয়সের নিচে) অংশগ্রহণ নিষিদ্ধ। অনুগ্রহ করে দায়িত্বশীলভাবে খেলুন।',
    copyright: 'কপিরাইট © SAMIR99. সমস্ত অধিকার সংরক্ষিত।',
    nav: {
      home: 'হোম',
      slots: 'স্লট',
      fishing: 'ফিশিং',
      live: 'লাইভ',
      poker: 'পোকার',
      sports: 'স্পোর্টস',
      esports: 'ই-স্পোর্টস',
      cockfight: 'কোকফাইট',
      lottery: 'লটারি',
      offers: 'অফার',
      app: 'অ্যাপ ডাউনলোড',
      support: 'গ্রাহক সেবা',
    },
    rail: {
      hot: 'গরম',
      slots: 'স্লট',
      fishing: 'ফিশিং',
      live: 'লাইভ',
      poker: 'পোকার',
      sports: 'স্পোর্টস',
      esports: 'ই-স্পোর্টস',
      cockfight: 'কোকফাইট',
      lottery: 'লটারি',
    },
    mobileExtra: {
      deposit: 'ডিপোজিট',
      withdraw: 'উত্তোলন',
      vip: 'ভিআইপি',
      supportShort: 'গ্রাহক সেবা',
      appShort: 'APP',
      bottomHome: 'হোম',
      bottomPromotion: 'প্রমোশন',
      bottomInvite: 'আমন্ত্রণ',
      bottomMember: 'সদস্য',
      jackpotLabel: 'JACKPOT',
      jackpotDemoNote: 'ডেমো জ্যাকপট প্রদর্শনী মিটার (প্রকৃত অর্থের লেনদেন নিষ্ক্রিয়)',
      androidBtn: 'Android',
      iosBtn: 'IOS',
      eventBadge: 'EVENT',
      walletTitle: 'ওয়ালেট প্রিভিউ',
      walletDepositTitle: 'ডিপোজিট (প্রিভিউ)',
      walletWithdrawTitle: 'উত্তোলন (প্রিভিউ)',
      walletNotice:
        'দায়িত্বশীল গেমিং ও কমপ্লায়েন্স বিজ্ঞপ্তি: প্রযোজ্য লাইসেন্সিং, আঞ্চলিক অনুমোদন, ১৮+ বয়স এবং পরিচয় যাচাই সম্পন্ন না হওয়া পর্যন্ত প্রকৃত অর্থের ডিপোজিট ও উত্তোলন নিষ্ক্রিয় রয়েছে।',
      vipTitle: 'ভিআইপি ক্লাব প্রিভিউ',
      vipSubtitle: 'সদস্যপদ স্তর ও কমিউনিটি ব্যাজ পরিচিতি (প্রদর্শনী)',
      inviteTitle: 'বন্ধুদের আমন্ত্রণ জানান',
      inviteSubtitle: 'আপনার রেফারেল কোড শেয়ার করে প্ল্যাটফর্মে বন্ধুদের আমন্ত্রণ করুন।',
      inviteCodeLabel: 'আমন্ত্রণ কোড',
      inviteCopyBtn: 'কপি করুন',
      inviteCopied: 'আমন্ত্রণ কোড কপি করা হয়েছে!',
      memberTitle: 'সদস্য কেন্দ্র',
      memberGuest: 'অতিথি ব্যবহারকারী',
      memberFavorites: 'প্রিয় গেমসমূহ',
      memberLanguage: 'ভাষা নির্বাচন',
      memberQuickSupport: 'গ্রাহক সেবা',
    },
    tags: {
      all: 'সব',
      favorites: 'প্রিয় আইটেমস',
      new: 'নতুন খেলা',
      hot: 'গরম খেলা',
      recent: 'সাম্প্রতিক খেলা',
      reel3: '৩টি রিল',
      reel5: '৫ রিল',
      arcade: 'তোরণ - শ্রেণী',
      bingo: 'বিঙ্গো',
      bonus: 'বোনাস খেলা',
      cascade: 'ক্যাসকেড স্লট',
      crash: 'ক্র্যাশ গেমস',
      buyFeature: 'বৈশিষ্ট্য কিনুন',
      freeSpin: 'বিনামূল্যে স্পিন',
      jackpot: 'জ্যাকপট',
      megaways: 'মেগাওয়ে',
      respin: 'রেস্পিন',
      scratch: 'আঁচড়',
      slot: 'স্লট',
      videoPoker: 'ভিডিও জুজু',
    },
    auth: {
      loginTitle: 'SAMIR99 লগইন',
      registerTitle: 'নতুন অ্যাকাউন্ট নিবন্ধন',
      usernameLabel: 'ইউজারনেম',
      usernamePlaceholder: 'আপনার ইউজারনেম লিখুন',
      passwordLabel: 'পাসওয়ার্ড',
      passwordPlaceholder: 'পাসওয়ার্ড লিখুন',
      confirmPasswordLabel: 'পাসওয়ার্ড নিশ্চিত করুন',
      confirmPasswordPlaceholder: 'পুনরায় পাসওয়ার্ড লিখুন',
      ageTerms: 'আমি নিশ্চিত করছি যে আমার বয়স ১৮+ এবং দায়িত্বশীল গেমিং নীতিমালা মেনে চলছি।',
      submitLogin: 'লগইন করুন',
      submitRegister: 'নিবন্ধন সম্পন্ন করুন',
      switchToRegister: 'অ্যাকাউন্ট নেই? নিবন্ধন করুন',
      switchToLogin: 'ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন',
      demoComplianceNote:
        'নিরাপত্তা বিজ্ঞপ্তি: এটি একটি UI প্রদর্শনী। প্রকৃত অর্থের লেনদেন, আমানত ও বাজি সক্রিয় নয়।',
      demoSuccessLogin: 'প্রদর্শনী লগইন সফল হয়েছে। স্বাগতম,',
      demoSuccessRegister: 'প্রদর্শনী নিবন্ধন সম্পন্ন হয়েছে। স্বাগতম,',
      errUsernameRequired: 'ইউজারনেম প্রয়োজন।',
      errUsernameShort: 'ইউজারনেম কমপক্ষে ৪ অক্ষরের হতে হবে।',
      errPasswordRequired: 'পাসওয়ার্ড প্রয়োজন।',
      errPasswordShort: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।',
      errPasswordMismatch: 'পাসওয়ার্ড দুটি মিলছে না।',
      errAgeRequired: 'অগ্রসর হতে ১৮+ বয়স ও নীতিমালা নিশ্চিত করুন।',
    },
    gameModal: {
      provider: 'প্রোভাইডার',
      category: 'ক্যাটাগরি',
      launchPreview: 'ডেমো প্রিভিউ খুলুন',
      launchingDemo: 'ডেমো গেম প্রিভিউ চালু আছে',
      close: 'বন্ধ করুন',
      complianceBanner:
        'দায়িত্বশীল গেমিং বিজ্ঞপ্তি: প্রকৃত অর্থের খেলা নিষ্ক্রিয় রয়েছে। লাইসেন্সিং, আঞ্চলিক বিধি ও বয়স যাচাই সম্পন্ন হওয়ার পর সক্রিয় করা হবে।',
      favoriteBtn: 'প্রিয়তে যোগ করুন',
      favoritedBtn: 'প্রিয় তালিকায় আছে',
    },
    supportModal: {
      title: '২৪/৭ গ্রাহক সেবা',
      subtitle: 'আপনার পছন্দের সাপোর্ট চ্যানেল নির্বাচন করুন।',
      openChannel: 'চ্যানেল খুলুন',
      configNotice: 'কনফিগারযোগ্য সাপোর্ট গন্তব্য — প্রোডাকশন স্থাপনার আগে অফিসিয়াল লিংক যুক্ত করুন।',
      hoursLabel: 'সেবার সময়',
      hoursValue: 'প্রতিদিন ২৪ ঘণ্টা',
    },
    mobile: {
      menuOpen: 'মেনু খুলুন',
      menuClose: 'মেনু বন্ধ করুন',
    },
  },
  en: {
    langLabel: 'English',
    login: 'Login',
    register: 'Register',
    registerShort: 'Register',
    hotGames: 'Hot Games',
    announcement:
      'SAMIR99.COM — Leading safe entertainment gaming platform worldwide. Stay tuned for new releases and platform updates!',
    searchPlaceholder: 'Game name',
    allProviders: 'All Providers',
    noGamesTitle: 'No games found',
    noGamesSubtitle: 'Try selecting another provider, filter tag, or clearing your search.',
    resetFilters: 'Reset Filters',
    favoriteAdd: 'Add to favorites',
    favoriteRemove: 'Remove from favorites',
    appHeading: 'Application',
    appDescription:
      'Download the mobile app for a fast, smooth, and secure entertainment experience supporting all categories: Sports, Esports, Live, Games, and Lottery.',
    appDownloadBtn: 'Download App',
    androidApp: 'Android APP',
    iosLiteApp: 'IOS LITE-APP',
    offersHeading: 'Featured Offers',
    offersSubtitle: 'Explore current platform showcase events and seasonal highlights.',
    offersDemoNote:
      'Preview Mode: Real-money wagering, deposits, and promotional payouts remain disabled until full licensing and verification are configured.',
    footerNotice1:
      'No one under the age of 18 (or the minimum legal age depending on jurisdiction) may open an account or participate on this platform. Age verification may be requested at any time.',
    footerNotice2:
      'Underage participation is strictly prohibited. Please engage responsibly.',
    copyright: 'Copyright © SAMIR99. All rights reserved.',
    nav: {
      home: 'Home',
      slots: 'Slots',
      fishing: 'Fishing',
      live: 'Live',
      poker: 'Poker',
      sports: 'Sports',
      esports: 'Esports',
      cockfight: 'Cockfight',
      lottery: 'Lottery',
      offers: 'Offers',
      app: 'App Download',
      support: 'Support',
    },
    rail: {
      hot: 'Hot',
      slots: 'Slots',
      fishing: 'Fishing',
      live: 'Live',
      poker: 'Poker',
      sports: 'Sports',
      esports: 'Esports',
      cockfight: 'Cockfight',
      lottery: 'Lottery',
    },
    mobileExtra: {
      deposit: 'Deposit',
      withdraw: 'Withdraw',
      vip: 'VIP',
      supportShort: 'Support',
      appShort: 'APP',
      bottomHome: 'Home',
      bottomPromotion: 'Promo',
      bottomInvite: 'Invite',
      bottomMember: 'Member',
      jackpotLabel: 'JACKPOT',
      jackpotDemoNote: 'Demo Jackpot Display Meter (Real-money play disabled)',
      androidBtn: 'Android',
      iosBtn: 'IOS',
      eventBadge: 'EVENT',
      walletTitle: 'Wallet Preview',
      walletDepositTitle: 'Deposit (Preview)',
      walletWithdrawTitle: 'Withdraw (Preview)',
      walletNotice:
        'Compliance Notice: Real-money deposits and withdrawals are disabled until licensing, jurisdictional checks, 18+ age verification, and KYC compliance are configured.',
      vipTitle: 'VIP Club Preview',
      vipSubtitle: 'Membership tiers & badge overview (Preview)',
      inviteTitle: 'Invite Friends',
      inviteSubtitle: 'Share your referral code to invite friends to the platform.',
      inviteCodeLabel: 'Invite Code',
      inviteCopyBtn: 'Copy',
      inviteCopied: 'Invite code copied!',
      memberTitle: 'Member Center',
      memberGuest: 'Guest Visitor',
      memberFavorites: 'Saved Favorites',
      memberLanguage: 'Language',
      memberQuickSupport: 'Customer Support',
    },
    tags: {
      all: 'All',
      favorites: 'Favorites',
      new: 'New Games',
      hot: 'Hot Games',
      recent: 'Recent',
      reel3: '3 Reels',
      reel5: '5 Reels',
      arcade: 'Arcade',
      bingo: 'Bingo',
      bonus: 'Bonus Games',
      cascade: 'Cascade',
      crash: 'Crash Games',
      buyFeature: 'Buy Feature',
      freeSpin: 'Free Spins',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      respin: 'Respin',
      scratch: 'Scratch',
      slot: 'Slots',
      videoPoker: 'Video Poker',
    },
    auth: {
      loginTitle: 'SAMIR99 Login',
      registerTitle: 'Create Account',
      usernameLabel: 'Username',
      usernamePlaceholder: 'Enter your username',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter password',
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter password',
      ageTerms: 'I confirm I am 18+ and agree to responsible gaming guidelines.',
      submitLogin: 'Sign In',
      submitRegister: 'Complete Registration',
      switchToRegister: 'New here? Register now',
      switchToLogin: 'Already have an account? Login',
      demoComplianceNote:
        'Notice: Frontend UI showcase only. Real-money deposits, balances, and wagering are disabled.',
      demoSuccessLogin: 'Demo session started. Welcome,',
      demoSuccessRegister: 'Demo account registered. Welcome,',
      errUsernameRequired: 'Username is required.',
      errUsernameShort: 'Username must be at least 4 characters.',
      errPasswordRequired: 'Password is required.',
      errPasswordShort: 'Password must be at least 6 characters.',
      errPasswordMismatch: 'Passwords do not match.',
      errAgeRequired: 'You must confirm 18+ age eligibility.',
    },
    gameModal: {
      provider: 'Provider',
      category: 'Category',
      launchPreview: 'Open Demo Preview',
      launchingDemo: 'Demo Preview Active',
      close: 'Close',
      complianceBanner:
        'Responsible Gaming Notice: Real-money gaming is disabled pending licensing, jurisdictional controls, and age/identity verification.',
      favoriteBtn: 'Add Favorite',
      favoritedBtn: 'Favorited',
    },
    supportModal: {
      title: '24/7 Customer Support',
      subtitle: 'Choose your preferred support channel below.',
      openChannel: 'Open Channel',
      configNotice: 'Configurable support endpoint — connect official URLs before production launch.',
      hoursLabel: 'Availability',
      hoursValue: '24 Hours Daily',
    },
    mobile: {
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
  },
  hi: {
    langLabel: 'हिन्दी',
    login: 'लॉगिन',
    register: 'पंजीकरण करें',
    registerShort: 'पंजीकरण',
    hotGames: 'लोकप्रिय खेल',
    announcement:
      'SAMIR99.COM — विश्व स्तर पर अग्रणी सुरक्षित मनोरंजन गेमिंग प्लेटफॉर्म। नवीनतम अपडेट के लिए जुड़े रहें!',
    searchPlaceholder: 'खेल का नाम',
    allProviders: 'सभी प्रदाता',
    noGamesTitle: 'कोई खेल नहीं मिला',
    noGamesSubtitle: 'कृपया दूसरा प्रदाता या फ़िल्टर चुनें।',
    resetFilters: 'फ़िल्टर रीसेट करें',
    favoriteAdd: 'पसंदीदा में जोड़ें',
    favoriteRemove: 'पसंदीदा से हटाएं',
    appHeading: 'एप्लिकेशन',
    appDescription:
      'बेहतर और सुरक्षित गेमिंग अनुभव के लिए अभी ऐप डाउनलोड करें। यह सभी श्रेणियों का समर्थन करता है: स्पोर्ट्स, लाइव, गेम्स और लॉटरी।',
    appDownloadBtn: 'ऐप डाउनलोड करें',
    androidApp: 'Android APP',
    iosLiteApp: 'IOS LITE-APP',
    offersHeading: 'विशेष ऑफ़र',
    offersSubtitle: 'प्लेटफॉर्म के प्रमुख इवेंट्स और डेमो हाइलाइट्स देखें।',
    offersDemoNote:
      'डेमो मोड: वास्तविक धन का लेन-देन आवश्यक लाइसेंस और आयु सत्यापन तक निष्क्रिय है।',
    footerNotice1:
      '18 वर्ष से कम आयु का कोई भी व्यक्ति खाता नहीं खोल सकता। कंपनी किसी भी समय आयु सत्यापन का अनुरोध करने का अधिकार सुरक्षित रखती है।',
    footerNotice2: 'कृपया जिम्मेदारी से खेलें।',
    copyright: 'कॉपीराइट © SAMIR99. सर्वाधिकार सुरक्षित।',
    nav: {
      home: 'होम',
      slots: 'स्लॉट',
      fishing: 'फिशिंग',
      live: 'लाइव',
      poker: 'पोकर',
      sports: 'स्पोर्ट्स',
      esports: 'ई-स्पोर्ट्स',
      cockfight: 'कॉकफाइट',
      lottery: 'लॉटरी',
      offers: 'ऑफ़र',
      app: 'ऐप डाउनलोड',
      support: 'ग्राहक सेवा',
    },
    rail: {
      hot: 'लोकप्रिय',
      slots: 'स्लॉट',
      fishing: 'फिशिंग',
      live: 'लाइव',
      poker: 'पोकर',
      sports: 'स्पोर्ट्स',
      esports: 'ई-स्पोर्ट्स',
      cockfight: 'कॉकफाइट',
      lottery: 'लॉटरी',
    },
    mobileExtra: {
      deposit: 'जमा',
      withdraw: 'निकासी',
      vip: 'VIP',
      supportShort: 'सहायता',
      appShort: 'APP',
      bottomHome: 'होम',
      bottomPromotion: 'प्रमोशन',
      bottomInvite: 'आमंत्रण',
      bottomMember: 'सदस्य',
      jackpotLabel: 'JACKPOT',
      jackpotDemoNote: 'डेमो जैकपॉट प्रदर्शन मीटर (वास्तविक धन निष्क्रिय)',
      androidBtn: 'Android',
      iosBtn: 'IOS',
      eventBadge: 'EVENT',
      walletTitle: 'वॉलेट प्रीव्यू',
      walletDepositTitle: 'जमा (प्रीव्यू)',
      walletWithdrawTitle: 'निकासी (प्रीव्यू)',
      walletNotice:
        'अनुपालन सूचना: लाइसेंसिंग और आयु सत्यापन पूर्ण होने तक वास्तविक धन का लेन-देन निष्क्रिय है।',
      vipTitle: 'VIP क्लब प्रीव्यू',
      vipSubtitle: 'सदस्यता स्तर और बैज विवरण (डेमो)',
      inviteTitle: 'दोस्तों को आमंत्रित करें',
      inviteSubtitle: 'अपना रेफरल कोड दोस्तों के साथ साझा करें।',
      inviteCodeLabel: 'आमंत्रण कोड',
      inviteCopyBtn: 'कॉपी करें',
      inviteCopied: 'कोड कॉपी हो गया!',
      memberTitle: 'सदस्य केंद्र',
      memberGuest: 'अतिथि उपयोगकर्ता',
      memberFavorites: 'पसंदीदा खेल',
      memberLanguage: 'भाषा चुनें',
      memberQuickSupport: 'ग्राहक सेवा',
    },
    tags: {
      all: 'सभी',
      favorites: 'पसंदीदा',
      new: 'नए खेल',
      hot: 'लोकप्रिय',
      recent: 'हालिया',
      reel3: '3 रील',
      reel5: '5 रील',
      arcade: 'आर्केड',
      bingo: 'बिंगो',
      bonus: 'बोनस',
      cascade: 'कैस्केड',
      crash: 'क्रैश गेम्स',
      buyFeature: 'बाय फीचर',
      freeSpin: 'फ्री स्पिन',
      jackpot: 'जैकपॉट',
      megaways: 'मेगावेज़',
      respin: 'रेस्पिन',
      scratch: 'स्क्रैच',
      slot: 'स्लॉट',
      videoPoker: 'वीडियो पोकर',
    },
    auth: {
      loginTitle: 'SAMIR99 लॉगिन',
      registerTitle: 'नया खाता बनाएं',
      usernameLabel: 'यूज़रनेम',
      usernamePlaceholder: 'अपना यूज़रनेम दर्ज करें',
      passwordLabel: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड दर्ज करें',
      confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
      confirmPasswordPlaceholder: 'पासवर्ड दोबारा दर्ज करें',
      ageTerms: 'मैं पुष्टि करता/करती हूं कि मेरी आयु 18+ है।',
      submitLogin: 'लॉगिन करें',
      submitRegister: 'पंजीकरण पूरा करें',
      switchToRegister: 'नए उपयोगकर्ता? पंजीकरण करें',
      switchToLogin: 'पहले से खाता है? लॉगिन करें',
      demoComplianceNote: 'सूचना: यह केवल UI डेमो है। वास्तविक धन लेन-देन निष्क्रिय है।',
      demoSuccessLogin: 'डेमो लॉगिन सफल। स्वागत है,',
      demoSuccessRegister: 'डेमो पंजीकरण सफल। स्वागत है,',
      errUsernameRequired: 'यूज़रनेम आवश्यक है।',
      errUsernameShort: 'यूज़रनेम कम से कम 4 अक्षरों का होना चाहिए।',
      errPasswordRequired: 'पासवर्ड आवश्यक है।',
      errPasswordShort: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।',
      errPasswordMismatch: 'पासवर्ड मेल नहीं खाते।',
      errAgeRequired: 'कृपया 18+ आयु की पुष्टि करें।',
    },
    gameModal: {
      provider: 'प्रदाता',
      category: 'श्रेणी',
      launchPreview: 'डेमो प्रीव्यू खोलें',
      launchingDemo: 'डेमो प्रीव्यू सक्रिय है',
      close: 'बंद करें',
      complianceBanner:
        'जिम्मेदार गेमिंग सूचना: लाइसेंसिंग और सत्यापन पूर्ण होने तक वास्तविक धन का खेल निष्क्रिय है।',
      favoriteBtn: 'पसंदीदा में जोड़ें',
      favoritedBtn: 'पसंदीदा में है',
    },
    supportModal: {
      title: '24/7 ग्राहक सेवा',
      subtitle: 'अपना पसंदीदा सहायता चैनल चुनें।',
      openChannel: 'चैनल खोलें',
      configNotice: 'कॉन्फ़िगरेबल सपोर्ट गंतव्य — प्रोडक्शन से पहले आधिकारिक लिंक जोड़ें।',
      hoursLabel: 'उपलब्धता',
      hoursValue: '24 घंटे प्रतिदिन',
    },
    mobile: {
      menuOpen: 'मेनू खोलें',
      menuClose: 'मेनू बंद करें',
    },
  },
};
