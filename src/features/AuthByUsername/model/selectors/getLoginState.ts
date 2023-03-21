import { StateSchema } from 'app/providers/StoreProvider';
import { ILoginSchema } from '../types/loginSchema';

const defaultState: ILoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

export const getLoginState = (state: StateSchema) => state?.loginForm || defaultState;
