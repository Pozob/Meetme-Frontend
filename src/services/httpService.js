import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.interceptors.response.use(null, error => {
    
    return Promise.reject(error);
});

function setWebToken(jwt) {
    axios.defaults.headers.common['x-webtoken'] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setWebToken
}