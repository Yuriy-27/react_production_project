import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (authData, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<IProfile>('profile', formData);

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
