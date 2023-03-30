import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<IProfile>(`profile/${formData.id}`, formData);

      if (!response.data) {
        throw new Error('No data');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
