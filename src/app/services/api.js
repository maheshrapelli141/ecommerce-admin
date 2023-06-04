import config from "app/config/config";
import { getSessionData, setSessionData } from "app/helpers/storagehandler";
import axios from "axios";

const Axios = axios.create({
    baseURL: `${config.BASE_URL}`,
});

// Axios.defaults.headers.common = { Accept: "application/json" };
// Axios.defaults.headers.common = { ContentType: "application/json" };

Axios.interceptors.request.use(function (config) {
    const token = getSessionData("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    // config["Access-Control-Allow-Credentials "] = true;
    return config;
});

Axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log({ error });
        const originalRequest = error.config;
        const refreshToken = getSessionData("refresh_token")
        if (error && error.response && error.response.status === 401 && !originalRequest._retry && refreshToken) {
            // Token has expired, make a request to refresh the token
            originalRequest._retry = true;

            return axios
                .post(`${config.BASE_URL}admin/refresh`, {
                    refresh_token: `${refreshToken}`,
                })
                .then((response) => {
                    const access_token = response.data.access_token;
                    setSessionData("token", access_token);

                    // Update the original request with the new access token
                    originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

                    // Retry the original request
                    return axios(originalRequest);
                });
        }

        return Promise.reject(error);
    }
);

export default Axios;
