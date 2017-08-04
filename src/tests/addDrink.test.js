import state from '../initialState.json'
import { addDrink, removeDrink } from '../actions'

//store for tests

import appReducer from '../store/reducers';
import { createStore } from 'redux';

const store = createStore(appReducer, state);

describe("ADD Drink", function () {
    const drink = {
            name: "Buff's Red",
            bar: "Buff's Pub",
            price: 4.5,
            size: 16,
            drinkId: 10,
            geo: {
                lat: 42.3571451,
                lng: -71.18658920000001
            },
            address: "317 Washington St, Newton, MA 02458, USA"
        }
        store.dispatch(addDrink(drink));

    test('increase amounts of drinks by 1', () => {
        expect(store.getState().drinks.length).toBe(3)
    });
})

