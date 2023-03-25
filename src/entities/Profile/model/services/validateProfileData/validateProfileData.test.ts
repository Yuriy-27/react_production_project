import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  userName: 'admin',
  firstName: 'Yurii',
  lastName: 'Shchebetun',
  age: 31,
  country: Country.UA,
  city: 'Kyiv',
  currency: Currency.UAH,
  avatar:
    'https://cdn.dribbble.com/users/187214/screenshots/2011963/media/e97d8786519b74ff46af512f062909f8.png',
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, firstName: '', lastName: '' });

    expect(result).toEqual([
      ValidateProfileError.INVALID_FIRST_NAME,
      ValidateProfileError.INVALID_LAST_NAME,
    ]);
  });

  test('with invalid age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INVALID_AGE]);
  });

  test('incorrect avatar link', async () => {
    const result = validateProfileData({
      ...data,
      avatar:
        'https://cdn.dribbble.com/users/187214/screenshots/2011963/media/e97d8786519b74ff46af512f062909f8',
    });

    expect(result).toEqual([ValidateProfileError.INVALID_AVATAR]);
  });

  test('invalid all fields', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INVALID_FIRST_NAME,
      ValidateProfileError.INVALID_LAST_NAME,
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_USER_NAME,
      ValidateProfileError.INVALID_AVATAR,
    ]);
  });
});
