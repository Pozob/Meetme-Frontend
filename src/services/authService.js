import http from "./httpService";
import decode from "jwt-decode";

const tokenName = "webtoken";
const endPoint = "/auth";

http.setWebToken(getWebToken());

function getWebToken() {
    return localStorage.getItem(tokenName);
}

async function login(username, password) {
    const {data: webToken} = await http.post(endPoint, {username, password});
    localStorage.setItem(tokenName, webToken);
}

function loginWithToken(webToken) {
    localStorage.setItem(tokenName, webToken);
}

function getCurrentUser() {
    try {
        return decode(getWebToken());
    } catch (e) {}
}

function logout() {
    localStorage.removeItem(tokenName);
}

export default {
    getWebToken,
    getCurrentUser,
    login,
    loginWithToken,
    logout
}