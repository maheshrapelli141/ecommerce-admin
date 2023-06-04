const { SET_DATA } = require("redux/actionTypes/countriesTypes");

export const setCountriesAction = (countries = []) => ({
    type: SET_DATA,
    data: { countries }
})