import httpService from "./httpService";

const endPoint = "/department";

function getDepartments() {
    return httpService.get(endPoint);
}

export default {
    getDepartments
}