import httpService from "./httpService";

const endPoint = "/user";

export function registerUser(user) {
    return httpService.post(endPoint, user);
}

export function saveUser(userId, user) {
    const url = `${endPoint}/${userId}`;
    return httpService.patch(url, user);
}

function getAll() {
    return httpService.get(endPoint);
}

export default {
    getAll
}