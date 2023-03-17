import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/login',
        authData,
      );

      if (!response.data) {
        throw new Error('No data');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(i18n.t('login_error'));
    }
  },
);
