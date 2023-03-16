import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  test('Decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
  });

  test('Increment', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });

  test('Work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
