import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  userName: 'admin',
  firstName: 'Yurii',
  lastName: 'Shchebetun',
  age: 31,
  country: Country.UA,
  city: 'Kyiv',
  currency: Currency.UAH,
  avatar:
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
};

describe('profileSlice.test', () => {
  test('test set readOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)),
    ).toEqual({ readOnly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      data,
      form: data,
      readOnly: true,
      validateErrors: undefined,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        firstName: 'Yurii',
        userName: 'admin',
      },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({
        userName: 'super admin',
        firstName: 'Yuriy',
      })),
    ).toEqual({
      form: {
        firstName: 'Yuriy',
        userName: 'super admin',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      data,
      form: data,
    });
  });
});
