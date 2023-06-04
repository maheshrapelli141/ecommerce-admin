import prodConfig from "./prodConfig";

let config = {
    BASE_URL: 'http://ec2-52-73-216-131.compute-1.amazonaws.com/api/'
}

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        ...config,
        ...prodConfig
    };
}
console.log({ config });
export default config;