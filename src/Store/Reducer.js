import * as actionTypes from './ActionTypes';

const initialState = {
    tableData: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_JSON_DATA:
            return {
                ...state,
                tableData: action.payload
            }
        default: return state
    }
};
export default reducer;