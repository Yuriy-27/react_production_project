import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (authData, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;

    try {
      const response = await extra.api.get<IProfile>('profile');

      if (!response.data) {
        throw new Error('No data');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('login_error'));
    }
  },
);
