import http from "./httpService";
import decode from "jwt-decode";

const tokenName = "webtoken";
const endPoint = "/auth";

http.setWebToken(getWebToken());

function getWebToken() {
    return sessionStorage.getItem(tokenName);
}

async function login(username, password) {
    const {data: webToken} = await http.post(endPoint, {username, password});
    sessionStorage.setItem(tokenName, webToken);
}

function loginWithToken(webToken) {
    sessionStorage.setItem(tokenName, webToken);
}

function getCurrentUser() {
    try {
        return decode(getWebToken());
    } catch (e) {}
}

function logout() {
    sessionStorage.removeItem(tokenName);
}

export default {
    getWebToken,
    getCurrentUser,
    login,
    loginWithToken,
    logout
}