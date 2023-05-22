import { isValidAvatarUrl } from '@/shared/lib/helpers/avatarUrlValidation';
import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileError.INVALID_DATA];
  }

  const {
    firstName,
    lastName,
    age,
    userName,
    avatar,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName || (firstName && firstName.length < 2)) {
    errors.push(ValidateProfileError.INVALID_FIRST_NAME);
  }

  if (!lastName || (lastName && lastName.length < 2)) {
    errors.push(ValidateProfileError.INVALID_LAST_NAME);
  }

  if (!age || !Number.isInteger(age) || age < 0 || age > 100) {
    errors.push(ValidateProfileError.INVALID_AGE);
  }

  if (!userName || (userName && userName.length < 2)) {
    errors.push(ValidateProfileError.INVALID_USER_NAME);
  }

  if (!isValidAvatarUrl(avatar)) {
    errors.push(ValidateProfileError.INVALID_AVATAR);
  }

  return errors;
};
