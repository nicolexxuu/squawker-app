import axios from "axios";

export function setTokenHeader(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export function apiCall(method, path, data) {
    if (data) console.log("method: " + method + " data: " + Object.keys(data));
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
            .then(res => {
                return resolve(res.data)
            })
            .catch(err => {
                return reject(err.response.data.error);
            });
    });
}