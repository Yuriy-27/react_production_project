import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from '../../types/profile';
import { getProfileData } from './getProfileData';

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

describe('getProfileData', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return default state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(defaultState);
  });
});
