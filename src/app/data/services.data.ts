export interface ServiceItem {
  id: string;
  icon: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  exampleEn: string;
  exampleBn: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    icon: '🌐',
    titleEn: 'Custom Web Development',
    titleBn: 'কাস্টম ওয়েব ডেভেলপমেন্ট',
    descriptionEn: 'We build beautiful, fast websites tailored to your business. Whether you need a simple landing page or a full-featured business site, we make it easy for your customers to find you online.',
    descriptionBn: 'আমরা আপনার ব্যবসার জন্য সুন্দর, দ্রুত ওয়েবসাইট তৈরি করি। সাধারণ ল্যান্ডিং পেজ হোক বা পূর্ণ ব্যবসায়িক সাইট, আপনার গ্রাহকরা সহজেই আপনাকে অনলাইনে খুঁজে পাবে।',
    exampleEn: 'A website for your shop so customers can find you online',
    exampleBn: 'আপনার দোকানের জন্য একটি ওয়েবসাইট যাতে গ্রাহকরা আপনাকে অনলাইনে খুঁজে পায়',
  },
  {
    id: 'app-development',
    icon: '📱',
    titleEn: 'App Development',
    titleBn: 'অ্যাপ ডেভেলপমেন্ট',
    descriptionEn: 'Mobile apps that work on Android and iOS. Let your customers place orders, check availability, or connect with you directly from their phones.',
    descriptionBn: 'অ্যান্ড্রয়েড ও আইওএস-এ কাজ করে এমন মোবাইল অ্যাপ। আপনার গ্রাহকরা তাদের ফোন থেকে অর্ডার দিতে, পণ্যের তথ্য দেখতে বা সরাসরি যোগাযোগ করতে পারবে।',
    exampleEn: 'An app for your pharmacy so regular customers can order refills',
    exampleBn: 'আপনার ফার্মেসির জন্য একটি অ্যাপ যাতে নিয়মিত গ্রাহকরা রিফিল অর্ডার করতে পারে',
  },
  {
    id: 'custom-software',
    icon: '⚙️',
    titleEn: 'Custom Software',
    titleBn: 'কাস্টম সফটওয়্যার',
    descriptionEn: 'Software designed around exactly how your business works. No need to change your process — we build the tool that fits you, not the other way around.',
    descriptionBn: 'আপনার ব্যবসা ঠিক যেভাবে চলে সেভাবেই সফটওয়্যার তৈরি। আপনার প্রক্রিয়া পরিবর্তন করার দরকার নেই — আমরা আপনার জন্য উপযুক্ত টুল তৈরি করি।',
    exampleEn: 'Software built around exactly how your business runs',
    exampleBn: 'আপনার ব্যবসা ঠিক যেভাবে চলে সেভাবে তৈরি সফটওয়্যার',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    titleEn: 'E-commerce Websites',
    titleBn: 'ই-কমার্স ওয়েবসাইট',
    descriptionEn: 'Start selling online with a professional e-commerce store. Product listings, order management, and home delivery — all in one place.',
    descriptionBn: 'একটি পেশাদার ই-কমার্স স্টোর দিয়ে অনলাইনে বিক্রি শুরু করুন। পণ্যের তালিকা, অর্ডার ব্যবস্থাপনা এবং হোম ডেলিভারি — সব একই জায়গায়।',
    exampleEn: 'Sell your grocery products online with home delivery',
    exampleBn: 'হোম ডেলিভারি সহ আপনার মুদি পণ্য অনলাইনে বিক্রি করুন',
  },
  {
    id: 'management-systems',
    icon: '📊',
    titleEn: 'Management & Inventory Systems',
    titleBn: 'ম্যানেজমেন্ট ও ইনভেন্টরি সিস্টেম',
    descriptionEn: 'Keep track of your stock, staff schedules, and daily sales with an easy-to-use management system. Know exactly what\'s happening in your business at any time.',
    descriptionBn: 'সহজে ব্যবহারযোগ্য ম্যানেজমেন্ট সিস্টেম দিয়ে আপনার স্টক, কর্মী এবং দৈনিক বিক্রয়ের হিসাব রাখুন। যেকোনো সময় আপনার ব্যবসার অবস্থা জানুন।',
    exampleEn: 'Track stock, staff, and sales in one place',
    exampleBn: 'স্টক, কর্মী এবং বিক্রয় এক জায়গায় ট্র্যাক করুন',
  },
  {
    id: 'billing-pos',
    icon: '🧾',
    titleEn: 'Billing / POS Systems',
    titleBn: 'বিলিং / পিওএস সিস্টেম',
    descriptionEn: 'Automate your billing with a modern POS system. Print receipts, track daily sales, and manage customer accounts — all from one screen.',
    descriptionBn: 'আধুনিক পিওএস সিস্টেম দিয়ে আপনার বিলিং স্বয়ংক্রিয় করুন। রসিদ প্রিন্ট করুন, দৈনিক বিক্রয় ট্র্যাক করুন এবং গ্রাহক অ্যাকাউন্ট পরিচালনা করুন।',
    exampleEn: 'Print receipts and track daily sales automatically',
    exampleBn: 'স্বয়ংক্রিয়ভাবে রসিদ প্রিন্ট করুন এবং দৈনিক বিক্রয় ট্র্যাক করুন',
  },
];
