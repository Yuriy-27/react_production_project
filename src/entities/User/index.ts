import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInit } from './model/selectors/getUserInit/getUserInit';
import { isUserAdmin, isUserManager } from './model/selectors/getUserRole/getUserRole';
import { userActions, userReducer } from './model/slice/userSlice';
import { IUser, IUserSchema, UserRole } from './model/types/user';

export {
  userReducer,
  userActions,
  type IUser,
  type IUserSchema,
  getUserAuthData,
  getUserInit,
  UserRole,
  isUserAdmin,
  isUserManager,
};
