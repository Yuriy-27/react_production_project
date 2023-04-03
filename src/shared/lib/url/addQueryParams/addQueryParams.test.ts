import { addQueryParams, getQueryParams } from './addQueryParams';

describe('getQueryParams', () => {
  test('returns empty string when no params are passed', () => {
    expect(getQueryParams({})).toEqual('?');
  });

  test('returns string of query params when valid params are passed', () => {
    expect(getQueryParams({ param1: 'value1', param2: 'value2' })).toEqual(
      '?param1=value1&param2=value2',
    );
  });

  test('ignores undefined values', () => {
    expect(getQueryParams({ param1: undefined, param2: 'value2' })).toEqual(
      '?param2=value2',
    );
  });
});

describe('addQueryParams', () => {
  afterEach(() => {
    window.history.replaceState(null, '', '');
  });

  test('adds query params to history state', () => {
    addQueryParams({ param1: 'value1', param2: 'value2' });
    expect(window.location.search).toEqual('?param1=value1&param2=value2');
  });

  test('adds query params and updates existing ones in history state', () => {
    window.history.replaceState(null, '', '?param1=value1');
    addQueryParams({ param2: 'value2' });
    expect(window.location.search).toEqual('?param1=value1&param2=value2');
  });
});
