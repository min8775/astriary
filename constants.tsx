
import { RewardTier } from './types';

export interface ComparisonTier extends RewardTier {
  discount: string;
  originalPrice: number;
  spots: number;
  features: {
    betaPriority: boolean;
    voiceJournaling: boolean;
    decorations: string;
    exclusiveThemes: string;
    deeperDives: string;
    reports: string;
  }
}

export const REWARD_TIERS: ComparisonTier[] = [
  {
    id: 'basic',
    name: 'Super Early Bird Basic (Yearly)',
    price: 69,
    originalPrice: 180,
    spots: 60,
    discount: '62% OFF',
    benefits: [
      'Unlock 62% savings on annual membership (originally $180)',
      'Access to 3 unique basic diary decorations',
      'Receive 5 in-depth "Deeper Dives" insights monthly',
      'Get comprehensive monthly cosmic reports'
    ],
    description: 'Perfect for those beginning their cosmic journey, offering essential tools and insights to align with the stars.',
    features: {
      betaPriority: false,
      voiceJournaling: false,
      decorations: '3 Basic',
      exclusiveThemes: '✕',
      deeperDives: '5/month',
      reports: 'Monthly'
    },
    isPopular: false
  },
  {
    id: 'premium',
    name: 'Super Early Bird Premium (Yearly)',
    price: 139,
    originalPrice: 463,
    spots: 40,
    discount: '70% OFF',
    benefits: [
      'Massive 70% discount on annual membership (originally $463)',
      'Exclusive beta priority access for new features',
      'Full voice journaling capabilities included',
      'Unlimited access to all diary decorations',
      'Own 3 exclusive premium themes forever',
      'Enjoy unlimited "Deeper Dives" for profound insights',
      'Receive detailed weekly and monthly cosmic reports'
    ],
    description: 'The ultimate package for true cosmic explorers, providing unparalleled access to all Astriary features and exclusive content.',
    features: {
      betaPriority: true,
      voiceJournaling: true,
      decorations: 'Unlimited',
      exclusiveThemes: '3 (Forever)',
      deeperDives: 'Unlimited',
      reports: 'Weekly + Monthly'
    },
    isPopular: true
  }
];

export const FUNDING_DATA = {
  currentAmount: 18400,
  goalAmount: 80000,
  backersCount: 100
};
