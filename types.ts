
export interface RewardTier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  isPopular?: boolean;
}

export interface FundingState {
  currentAmount: number;
  goalAmount: number;
  backersCount: number;
}
