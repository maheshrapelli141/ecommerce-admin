import { SET_DATA } from "redux/actionTypes/countriesTypes";

const initialState = {
    countries: []
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                countries: action.data.countries
            }
        default:
            return state;
    }
};
