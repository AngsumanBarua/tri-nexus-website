export interface PricingTier {
  id: string;
  nameEn: string;
  nameBn: string;
  priceBdt: string;
  descriptionEn: string;
  descriptionBn: string;
  featuresEn: string[];
  featuresBn: string[];
  highlighted: boolean;
}

export interface FaqItem {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    nameEn: 'Basic',
    nameBn: 'বেসিক',
    priceBdt: '২,০০০',
    descriptionEn: 'Perfect for small shops just getting started with technology.',
    descriptionBn: 'প্রযুক্তি দিয়ে সবে শুরু করা ছোট দোকানের জন্য উপযুক্ত।',
    featuresEn: [
      'Single system or website',
      'Basic customization',
      'Phone & WhatsApp support',
      'Monthly updates',
      'Data backup',
    ],
    featuresBn: [
      'একটি সিস্টেম বা ওয়েবসাইট',
      'বেসিক কাস্টমাইজেশন',
      'ফোন ও হোয়াটসঅ্যাপ সাপোর্ট',
      'মাসিক আপডেট',
      'ডেটা ব্যাকআপ',
    ],
    highlighted: false,
  },
  {
    id: 'standard',
    nameEn: 'Standard',
    nameBn: 'স্ট্যান্ডার্ড',
    priceBdt: '৫,০০০',
    descriptionEn: 'Great for growing businesses that need more features and priority support.',
    descriptionBn: 'যেসব ব্যবসার আরও ফিচার ও অগ্রাধিকার সাপোর্ট দরকার তাদের জন্য উপযুক্ত।',
    featuresEn: [
      'Up to 3 systems or pages',
      'Advanced customization',
      'Priority phone & WhatsApp support',
      'Weekly updates',
      'Data backup & recovery',
      'Basic analytics & reports',
    ],
    featuresBn: [
      'সর্বোচ্চ ৩টি সিস্টেম বা পেজ',
      'অ্যাডভান্সড কাস্টমাইজেশন',
      'অগ্রাধিকার ফোন ও হোয়াটসঅ্যাপ সাপোর্ট',
      'সাপ্তাহিক আপডেট',
      'ডেটা ব্যাকআপ ও রিকভারি',
      'বেসিক অ্যানালিটিক্স ও রিপোর্ট',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    nameEn: 'Premium',
    nameBn: 'প্রিমিয়াম',
    priceBdt: '১০,০০০',
    descriptionEn: 'For businesses that need a complete digital solution with dedicated support.',
    descriptionBn: 'যেসব ব্যবসার সম্পূর্ণ ডিজিটাল সমাধান ও ডেডিকেটেড সাপোর্ট প্রয়োজন তাদের জন্য।',
    featuresEn: [
      'Unlimited systems & pages',
      'Full customization',
      'Dedicated support manager',
      'Real-time updates',
      'Automated backup & recovery',
      'Advanced analytics & reports',
      'Staff training included',
    ],
    featuresBn: [
      'আনলিমিটেড সিস্টেম ও পেজ',
      'সম্পূর্ণ কাস্টমাইজেশন',
      'ডেডিকেটেড সাপোর্ট ম্যানেজার',
      'রিয়েল-টাইম আপডেট',
      'স্বয়ংক্রিয় ব্যাকআপ ও রিকভারি',
      'অ্যাডভান্সড অ্যানালিটিক্স ও রিপোর্ট',
      'স্টাফ ট্রেনিং অন্তর্ভুক্ত',
    ],
    highlighted: false,
  },
];

export const TRIAL_CONDITIONS_EN: string[] = [
  'One free demo per business',
  'Full support included during the trial period',
  'No hidden costs — completely free for 30 days',
  'No credit card or advance payment required',
  'You can cancel anytime during the trial',
];

export const TRIAL_CONDITIONS_BN: string[] = [
  'প্রতিটি ব্যবসার জন্য একটি ফ্রি ডেমো',
  'ট্রায়াল পিরিয়ডে সম্পূর্ণ সাপোর্ট অন্তর্ভুক্ত',
  'কোনো লুকানো খরচ নেই — ৩০ দিন সম্পূর্ণ বিনামূল্যে',
  'কোনো ক্রেডিট কার্ড বা অগ্রিম পেমেন্ট প্রয়োজন নেই',
  'ট্রায়ালের সময় যেকোনো সময় বাতিল করতে পারেন',
];

export const FAQS: FaqItem[] = [
  {
    questionEn: 'What happens after the free month?',
    questionBn: 'ফ্রি মাস শেষ হলে কী হবে?',
    answerEn: 'After the free trial, you can choose a monthly plan that fits your needs. If you decide not to continue, there\'s no charge — simply let us know.',
    answerBn: 'ফ্রি ট্রায়াল শেষ হলে, আপনি আপনার প্রয়োজন অনুযায়ী একটি মাসিক প্ল্যান বেছে নিতে পারেন। যদি চালিয়ে যেতে না চান, কোনো চার্জ নেই — শুধু আমাদের জানান।',
  },
  {
    questionEn: 'Can I cancel anytime?',
    questionBn: 'আমি কি যেকোনো সময় বাতিল করতে পারি?',
    answerEn: 'Yes! There are no long-term contracts. You can cancel your subscription at the end of any month with no penalties.',
    answerBn: 'হ্যাঁ! কোনো দীর্ঘমেয়াদী চুক্তি নেই। আপনি যেকোনো মাসের শেষে কোনো জরিমানা ছাড়াই সাবস্ক্রিপশন বাতিল করতে পারেন।',
  },
  {
    questionEn: 'What if I need extra features later?',
    questionBn: 'পরে যদি অতিরিক্ত ফিচার প্রয়োজন হয়?',
    answerEn: 'No problem! You can upgrade your plan or request custom features at any time. We\'ll work with you to add exactly what you need.',
    answerBn: 'কোনো সমস্যা নেই! আপনি যেকোনো সময় প্ল্যান আপগ্রেড করতে বা কাস্টম ফিচার রিকোয়েস্ট করতে পারেন। আপনার ঠিক যা প্রয়োজন তা যোগ করতে আমরা আপনার সাথে কাজ করব।',
  },
  {
    questionEn: 'Is there a setup fee?',
    questionBn: 'কোনো সেটআপ ফি আছে কি?',
    answerEn: 'No setup fee for any of our standard plans. For highly customized solutions, we\'ll discuss any one-time costs upfront — no surprises.',
    answerBn: 'আমাদের কোনো স্ট্যান্ডার্ড প্ল্যানের জন্য সেটআপ ফি নেই। অত্যন্ত কাস্টমাইজড সমাধানের জন্য, আমরা যেকোনো একবারের খরচ আগে থেকেই জানিয়ে দেব — কোনো চমক নেই।',
  },
];
