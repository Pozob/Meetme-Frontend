import httpService from "./httpService";

const endPoint = "/room";

function getAll() {
    return httpService.get(endPoint);
}

function get(id) {
    return httpService.get(`${endPoint}/${id}`);
}

function edit(roomId, room) {
    return httpService.put(`${endPoint}/${roomId}`, room);
}

function create(room) {
    return httpService.post(endPoint, room);
}

export default {
    getAll,
    get,
    edit,
    create
}