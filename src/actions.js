/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const addDrink = (drink) => {
    return {
        type: C.ADD_DRINK,
        payload: drink
    }
}

export const disableContent = (id) => {
    return {
        type: C.REMOVE_DRINK,
        payload: id
    }
}