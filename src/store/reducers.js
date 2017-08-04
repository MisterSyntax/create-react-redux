/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js';
import { combineReducers } from 'redux';

//TODO: Remove/Replace Sample reducer
export const drinks = (state = [], action) => {
    switch (action.type) {
        case C.ADD_DRINK: {
            return [...state,action.payload];
        }
        case C.REMOVE_DRINK: {
            return state.filter(curr=>curr.drinkId !== action.payload);
        }
        default:{
            return state;
        }
    }
}

export default combineReducers({
    drinks
});