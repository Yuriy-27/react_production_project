import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId: string, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<IProfile>(`profile/${profileId}`);

      if (!response.data) {
        throw new Error('No data');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('fetchProfileDataError');
    }
  },
);
