import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/constants/common';
import { IProfile, ProfileSchema } from '../../types/profile';

const defaultState: IProfile = {
  firstName: '',
  lastName: '',
  age: 0,
  currency: Currency.UAH,
  country: Country.UA,
  city: '',
  user_role: '',
  avatar: '',
};

export const getProfileData = (state: StateSchema) => state?.profile?.data || defaultState;
