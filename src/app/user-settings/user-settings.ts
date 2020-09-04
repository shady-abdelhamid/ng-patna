import { SubscriptionType } from './subscription-type.enum';
import { InterfaceStyle } from './interface-style.enum';

/**
 * User settings domain model
 */
export interface UserSettings {
  name: string;
  emailOffers: boolean;
  interfaceStyle: InterfaceStyle;
  subscriptionType: SubscriptionType;
  notes: string;
  password: string;
}
