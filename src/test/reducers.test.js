import C from '../constants'
import state from '../src/initialState.json'

import { drinks } from '../store/reducers'
import { createStore } from 'redux'
import appReducer from '../src/store/reducers';

describe('ADD_DRINK', function () {
  let nextState = {};
  test('increase amounts of drinks by 1', () => {
    expect(1).toBe(21)
  });
});

describe('REMOVE_DRINK', function () {
  let nextState = {};
  test('increase amounts of drinks by 1', () => {
    expect(1).toBe(21)
  });
});