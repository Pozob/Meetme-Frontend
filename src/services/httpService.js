import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.interceptors.response.use(null, error => {
    const userError = error.response.status && error.response.status >= 400 && error.response.status < 500;
    
    if(!userError) {
        toast.error("Ein unerwarteter Fehler ist passiert");
        console.log("Hard Error:", error);
    }
    
    return Promise.reject(error);
});

function setWebToken(jwt) {
    axios.defaults.headers.common['x-webtoken'] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setWebToken
}