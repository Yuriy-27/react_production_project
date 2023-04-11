import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from 'entities/Profile';
import { getProfileForm } from './getProfileForm';

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

describe('getProfileForm test', () => {
  test('should return state', () => {
    const data = {
      userName: 'admin',
      firstName: 'Yurii',
      lastName: 'Shchebetun',
      age: 31,
      country: Country.UA,
      city: 'Kyiv',
      currency: Currency.UAH,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should return default state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(defaultState);
  });
});
