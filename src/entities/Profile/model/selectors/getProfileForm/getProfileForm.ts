import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from '../../types/profile';

const defaultState: IProfile = {
  firstName: '',
  lastName: '',
  age: 0,
  currency: Currency.UAH,
  country: Country.UA,
  city: '',
  userName: '',
  avatar: '',
};

export const getProfileForm = (state: StateSchema) => state?.profile?.form || defaultState;
