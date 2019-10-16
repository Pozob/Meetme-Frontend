import httpService from "./httpService";

const endPoint = "/user";

export function registerUser(user) {
    return httpService.post(endPoint, user)
}

