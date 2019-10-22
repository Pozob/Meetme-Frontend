import httpService from "./httpService";

const endPoint = "/meeting";

function getAll() {
    return httpService.get(endPoint);
}

function get(id) {
    return httpService.get(`${endPoint}/${id}`);
}

async function edit(id, meeting) {
    // return httpService.put(`${endPoint}/${id}/addUser`, meeting);
}

function addParticipant(meetingId, userIds) {
    const data = {addUser: userIds}
    return httpService.patch(`${endPoint}/${meetingId}/`, data);
}

function removeParticipant(meetingId, userIds) {
    const data = {removeUser: userIds};
    return httpService.patch(`${endPoint}/${meetingId}`, data);
}

function create(meeting) {
    return httpService.post(endPoint, meeting)
}

export default {
    getAll,
    get,
    edit,
    addParticipant,
    removeParticipant,
    create
}