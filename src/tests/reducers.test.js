import C from '../constants'
import state from '../initialState.json'

import { drinks } from '../store/reducers'
import { createStore } from 'redux'
import appReducer from '../store/reducers';

const store = createStore(appReducer, state);

describe('ADD_DRINK', function () {
  const action = {
    type: C.ADD_DRINK,
    payload: {
            "name": "Budweiser",
            "bar": "Last Drop",
            "geo": "TODO-12",
            "address": "",
            "price": 3,
            "size": 16,
            "totalDrinks": 1,
            "lastDrank": "2017-06-23",
            "drinkId": 10,
            "flags": {
                "badPrice": 0,
                "unavailable": 0
            }
        }
}
  const nextState = drinks(state.drinks, action);
  test('increase amounts of drinks by 1', () => {
    expect(nextState.length).toBe(3)
  });
});

describe('REMOVE_DRINK', function () {
  const action = {
    type: C.REMOVE_DRINK,
    payload: 1499456941482
  };
  const nextState = drinks(state.drinks, action);
  test('decrease amounts of drinks by 1', () => {
    expect(nextState.length).toBe(1)
  });
});