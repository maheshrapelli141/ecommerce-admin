import Axios from "./api";

export const login = (email, password) => Axios.post('/admin/login', { email, password });
export const checkEmailExists = (email) => Axios.get('/admin/login?email' + email);
export const getUser = () => Axios.get('/admin/get-user');