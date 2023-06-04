import Axios from "./api";

export const getCountries = () => Axios.get('/country');