import * as actionTypes from './ActionTypes';


export const jsonDataProvider = (data) => ({
    type: actionTypes.SEARCH_JSON_DATA,
    payload: data
})