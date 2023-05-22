import { IProfile } from '@/entities/Profile';

export enum ValidateProfileError {
  INVALID_FIRST_NAME = 'INVALID_FIRST_NAME',
  INVALID_LAST_NAME = 'INVALID_LAST_NAME',
  INVALID_AGE = 'INVALID_AGE',
  INVALID_CURRENCY = 'INVALID_CURRENCY',
  INVALID_COUNTRY = 'INVALID_COUNTRY',
  INVALID_CITY = 'INVALID_CITY',
  INVALID_USER_NAME = 'INVALID_USER_NAME',
  INVALID_AVATAR = 'INVALID_AVATAR',
  SERVER_ERROR = 'SERVER_ERROR',
  INVALID_DATA = 'INVALID_DATA',
}
export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  validateErrors?: ValidateProfileError[];
}
