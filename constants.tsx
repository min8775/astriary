
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
      '62% Discount ($180 value)',
      '3 Basic Diary Decorations',
      '5 Deeper Dives / month',
      'Monthly Cosmic Reports'
    ],
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
      '70% Discount ($463 value)',
      'Beta Priority Access',
      'Voice Journaling Enabled',
      'Unlimited Diary Decorations',
      '3 Exclusive Themes (Forever)',
      'Unlimited Deeper Dives',
      'Weekly + Monthly Reports'
    ],
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
