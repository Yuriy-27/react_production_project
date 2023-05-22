import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { IProfile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: IProfile = {
  id: '1',
  firstName: 'firstName',
  lastName: 'lastName',
  age: 1,
  userName: 'userName',
  city: 'city',
  currency: Currency.UAH,
  country: Country.UA,
  avatar: 'https://cdn.dribbble.com/users/187214/screenshots/2011963/media/e97d8786519b74ff46af512f062909f8.png',

};

const options = {
  initialState: {
    profile: {
      readOnly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'username',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('change readOnly statement', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileHeader__EditButton'));
    expect(screen.getByTestId('EditableProfileHeader__SaveButton')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileHeader__CancelButton')).toBeInTheDocument();
  });
});

describe('EditableProfileCard', () => {
  test('clear value of input and cancel edit', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileHeader__EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard__firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard__lastName'));

    await userEvent.type(screen.getByTestId('ProfileCard__firstName'), 'userName');
    await userEvent.type(screen.getByTestId('ProfileCard__lastName'), 'userLastName');

    expect(screen.getByTestId('ProfileCard__firstName')).toHaveValue('userName');
    expect(screen.getByTestId('ProfileCard__lastName')).toHaveValue('userLastName');

    await userEvent.click(screen.getByTestId('EditableProfileHeader__CancelButton'));

    expect(screen.getByTestId('ProfileCard__firstName')).toHaveValue('firstName');
    expect(screen.getByTestId('ProfileCard__lastName')).toHaveValue('lastName');
  });
});

describe('EditableProfileCard', () => {
  test('Error should be visible', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileHeader__EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard__firstName'));

    await userEvent.click(screen.getByTestId('EditableProfileHeader__SaveButton'));

    expect(screen.getByTestId('EditableProfileCard__error__paragraph')).toBeInTheDocument();
  });
});

describe('EditableProfileCard', () => {
  test('Everything is OK and PUT request should be sent to the server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileHeader__EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard__firstName'), 'userName');
    await userEvent.type(screen.getByTestId('ProfileCard__lastName'), 'userLastName');

    await userEvent.click(screen.getByTestId('EditableProfileHeader__SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
