import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;

    try {
      const response = await extra.api.post('login', authData);

      if (!response.data) {
        throw new Error('No data');
      }

      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('login_error'));
    }
  },
);
