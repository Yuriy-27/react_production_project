import { Country, Currency } from 'shared/constants/common';

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  user_role: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
