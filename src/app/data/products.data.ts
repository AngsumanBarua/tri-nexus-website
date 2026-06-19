export interface ProductItem {
  id: string;
  icon: string;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  featuresEn: string[];
  featuresBn: string[];
  priceBdt: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'pharmacy-billing',
    icon: '💊',
    nameEn: 'Pharmacy Billing System',
    nameBn: 'ফার্মেসি বিলিং সিস্টেম',
    descriptionEn: 'Complete billing and inventory management designed specifically for pharmacies. Track medicines, manage expiry dates, and generate invoices instantly.',
    descriptionBn: 'ফার্মেসির জন্য বিশেষভাবে তৈরি সম্পূর্ণ বিলিং ও ইনভেন্টরি ম্যানেজমেন্ট। ওষুধ ট্র্যাক করুন, মেয়াদ উত্তীর্ণের তারিখ পরিচালনা করুন এবং তাৎক্ষণিক চালান তৈরি করুন।',
    featuresEn: [
      'Medicine inventory with expiry tracking',
      'Automated billing & receipt printing',
      'Customer purchase history',
      'Low stock alerts',
    ],
    featuresBn: [
      'মেয়াদ ট্র্যাকিং সহ ওষুধের ইনভেন্টরি',
      'স্বয়ংক্রিয় বিলিং ও রসিদ প্রিন্টিং',
      'গ্রাহকের ক্রয় ইতিহাস',
      'কম স্টক সতর্কতা',
    ],
    priceBdt: '৳3,000/mo',
  },
  {
    id: 'grocery-pos',
    icon: '🥬',
    nameEn: 'Grocery POS System',
    nameBn: 'মুদি দোকানের পিওএস সিস্টেম',
    descriptionEn: 'A simple, fast point-of-sale system built for grocery stores and daily-goods shops. Scan products, print receipts, and track your daily earnings.',
    descriptionBn: 'মুদি দোকান ও দৈনন্দিন পণ্যের দোকানের জন্য একটি সহজ, দ্রুত পয়েন্ট-অফ-সেল সিস্টেম। পণ্য স্ক্যান করুন, রসিদ প্রিন্ট করুন এবং দৈনিক আয় ট্র্যাক করুন।',
    featuresEn: [
      'Barcode scanning support',
      'Daily, weekly & monthly sales reports',
      'Quick checkout with receipt printing',
      'Multi-user staff accounts',
    ],
    featuresBn: [
      'বারকোড স্ক্যানিং সাপোর্ট',
      'দৈনিক, সাপ্তাহিক ও মাসিক বিক্রয় রিপোর্ট',
      'রসিদ প্রিন্টিং সহ দ্রুত চেকআউট',
      'একাধিক ব্যবহারকারী স্টাফ অ্যাকাউন্ট',
    ],
    priceBdt: '৳2,500/mo',
  },
  {
    id: 'simple-ecommerce',
    icon: '🛍️',
    nameEn: 'Simple E-commerce Store',
    nameBn: 'সিম্পল ই-কমার্স স্টোর',
    descriptionEn: 'A ready-to-use online store where you can list your products, receive orders, and manage deliveries. Perfect for small shops wanting to sell online.',
    descriptionBn: 'একটি ব্যবহার-উপযোগী অনলাইন স্টোর যেখানে আপনি পণ্য তালিকাভুক্ত করতে, অর্ডার গ্রহণ করতে এবং ডেলিভারি পরিচালনা করতে পারেন। অনলাইনে বিক্রি করতে চাওয়া ছোট দোকানের জন্য উপযুক্ত।',
    featuresEn: [
      'Product catalog with images & prices',
      'Order management dashboard',
      'Delivery tracking',
      'WhatsApp order notifications',
    ],
    featuresBn: [
      'ছবি ও মূল্য সহ পণ্যের ক্যাটালগ',
      'অর্ডার ম্যানেজমেন্ট ড্যাশবোর্ড',
      'ডেলিভারি ট্র্যাকিং',
      'হোয়াটসঅ্যাপ অর্ডার নোটিফিকেশন',
    ],
    priceBdt: '৳4,000/mo',
  },
  {
    id: 'inventory-manager',
    icon: '📦',
    nameEn: 'Inventory Manager',
    nameBn: 'ইনভেন্টরি ম্যানেজার',
    descriptionEn: 'Know exactly what\'s in your stock at all times. Track products coming in and going out, set reorder alerts, and generate stock reports.',
    descriptionBn: 'সব সময় আপনার স্টকে ঠিক কী আছে তা জানুন। পণ্যের আসা-যাওয়া ট্র্যাক করুন, রিঅর্ডার সতর্কতা সেট করুন এবং স্টক রিপোর্ট তৈরি করুন।',
    featuresEn: [
      'Real-time stock levels',
      'Purchase & sales tracking',
      'Automatic reorder alerts',
      'Export reports to Excel',
    ],
    featuresBn: [
      'রিয়েল-টাইম স্টক লেভেল',
      'ক্রয় ও বিক্রয় ট্র্যাকিং',
      'স্বয়ংক্রিয় রিঅর্ডার সতর্কতা',
      'এক্সেলে রিপোর্ট এক্সপোর্ট',
    ],
    priceBdt: '৳2,000/mo',
  },
];
