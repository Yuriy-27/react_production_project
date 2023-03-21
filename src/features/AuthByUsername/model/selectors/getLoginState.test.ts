import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState selector', () => {
  let state: DeepPartial<StateSchema>;

  beforeEach(() => {
    state = {
      loginForm: {
        username: 'test user',
        password: 'test password',
        isLoading: false,
        error: null,
      },
    };
  });

  test('should return login form state', () => {
    const result = getLoginState(state as StateSchema);
    expect(result).toEqual(state.loginForm);
  });

  test('should return default state if login form is not present', () => {
    delete state.loginForm;
    const result = getLoginState(state as StateSchema);
    expect(result).toEqual({
      username: '',
      password: '',
      isLoading: false,
      error: null,
    });
  });

  test('should return login form state with error message', () => {
    state.loginForm.error = 'Invalid username or password';
    const result = getLoginState(state as StateSchema);
    expect(result).toEqual(state.loginForm);
    expect(result.error).toEqual('Invalid username or password');
  });

  test('should return login form state with isLoading true', () => {
    state.loginForm.isLoading = true;
    const result = getLoginState(state as StateSchema);
    expect(result).toEqual(state.loginForm);
    expect(result.isLoading).toBeTruthy();
  });

  test('should return entered username and password', () => {
    state.loginForm.username = 'admin';
    state.loginForm.password = '123';
    const result = getLoginState(state as StateSchema);
    expect(result).toEqual(state.loginForm);
    expect(result.username).toEqual('admin');
    expect(result.password).toEqual('123');
  });
});
