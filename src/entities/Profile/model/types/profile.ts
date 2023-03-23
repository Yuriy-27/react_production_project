import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  userName?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
}
