import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername async thunk test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { username: 'admin', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('login error', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  // });
  test('success login', async () => {
    const userValue = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('login error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
