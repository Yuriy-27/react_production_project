import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: true,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('should return default state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
