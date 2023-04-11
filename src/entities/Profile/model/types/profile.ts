import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface IProfile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  userName?: string;
  avatar?: string;
}
