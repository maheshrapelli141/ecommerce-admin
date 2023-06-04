import { getSessionData } from "app/helpers/storagehandler";
import { INIT, LOGIN, LOGOUT } from "redux/actionTypes/authTypes";

const isTokenExists = (getSessionData('token') || getSessionData('refresh_token') || '').length ? true : false;

const initialState = {
    isAuthenticated: isTokenExists,
    user: null,
    token: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.data.token
            }
        case INIT:
            return {
                ...state,
                user: action.data.user
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state;
    }
};
