import { getUserAuthData } from './model/selectors/getUserAuthData';
import { userActions, userReducer } from './model/slice/userSlice';
import { IUser, IUserSchema } from './model/types/user';

export {
  userReducer,
  userActions,
  IUser,
  IUserSchema,
  getUserAuthData,
};
