import { INIT, LOGIN, LOGOUT } from "redux/actionTypes/authTypes";

export const loginAction = (token) => ({
    type: LOGIN,
    data: { token }
})

export const initAction = (user) => ({
    type: INIT,
    data: { user }
})

export const logoutAction = () => ({
    type: LOGOUT
})