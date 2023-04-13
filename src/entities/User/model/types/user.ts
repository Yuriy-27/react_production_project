export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager',
}
export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface IUserSchema {
  authData?: IUser
  _init: boolean;
}
