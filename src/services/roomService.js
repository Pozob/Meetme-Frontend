import httpService from "./httpService";

const endPoint = "/room";

function getRooms() {
    return httpService.get(endPoint);
}

function saveRoom(roomId, room) {
    return httpService.put(`${endPoint}/${roomId}`, room);
}

function createRoom(room) {
    return httpService.post(endPoint, room);
}

export default {
    getRooms,
    saveRoom,
    createRoom
}