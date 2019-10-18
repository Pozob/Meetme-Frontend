import httpService from "./httpService";

const endPoint = "/meeting";

function getAll() {
    return httpService.get(endPoint);
}

function get(id) {
    return httpService.get(`${endPoint}/${id}`);
}

function edit(id, meeting) {
    return httpService.put(`${endPoint}/${id}`, meeting);
}

function create(meeting) {
    return httpService.post(endPoint, meeting)
}

export default {
    getAll,
    get,
    edit,
    create
}