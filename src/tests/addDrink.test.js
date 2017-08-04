import state from '../initialState.json'
import { addDrink, removeDrink } from '../actions'

import C from '../constants'
import { drinks } from '../store/reducers'
import { createStore } from 'redux'
import appReducer from '../store/reducers';



describe('ADD_DRINK', function () {
    const store = createStore(appReducer, state);
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


//store for tests


describe("ADD Drink action", function () {

    const store = createStore(appReducer, state);
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

