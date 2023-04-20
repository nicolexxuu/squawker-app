import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { ADD_ERROR, REMOVE_ERROR, removeError, addError } from "./errors";

export function setCurrentUser(user) {
    console.log("setting current user to " + user);
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export function setAuthorizationToken(token) {
    setTokenHeader(token);
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function authUser(type, userData) {
    console.log('current userDAta: ' + Object.keys(userData));
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/auth/${type}`, userData).then(({ token, ...user }) => {
                console.log('posting user: ' + user.id);
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            })
                .catch(err => {
                    dispatch(addError(err.message));
                    reject();
                })
        });
    }
}