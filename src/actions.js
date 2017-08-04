/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const addDrink = ({name, bar, price, size, geo, address, drinkId}) => {
    //Application logic
    const today = new Date()
    const currentYMD = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    const newId = drinkId ? drinkId : parseInt(today.getTime().valueOf())
    return {
        type: C.ADD_DRINK,
         payload: {
            name,
            bar,
            geo,
            address,
            price,
            size,
            totalDrinks: 1,
            lastDrank: currentYMD,
            drinkId: newId,
            flags: {
                badPrice: 0,
                unavailable: 0
            }
        }
    }
}

export const removeDrink = (id) => {
    return {
        type: C.REMOVE_DRINK,
        payload: id
    }
}