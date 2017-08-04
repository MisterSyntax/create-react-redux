import C from '../constants'
import state from '../initialState.json'
import { removeDrink } from '../actions'

import { drinks } from '../store/reducers'
import { createStore } from 'redux'
import appReducer from '../store/reducers';

const store = createStore(appReducer, state);


describe('REMOVE_DRINK reducer', function () {
  const action = {
    type: C.REMOVE_DRINK,
    payload: 1499456941482
  };
  const nextState = drinks(state.drinks, action);
  test('decrease amounts of drinks by 1', () => {
    expect(nextState.length).toBe(1)
  });
});

describe("REMOVE Drink action", function () {
    const store2 = store;
    const id = 1499456917370;
    store2.dispatch(removeDrink(id));

    test('decrease amounts of drinks by 1', () => {
        expect(store2.getState().drinks.length).toBe(1)
    });
})