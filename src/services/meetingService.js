import httpService from "./httpService";

const endPoint = "/meeting";

function getAll() {
    return httpService.get(endPoint);
}

function getUpcomingMeetingsForUser(user) {
    return httpService.get(`${endPoint}?user=${user._id}`)
}

function get(id) {
    return httpService.get(`${endPoint}/${id}`);
}

async function edit(id, meeting) {
    return httpService.put(`${endPoint}/${id}/`, meeting);
}

function addParticipant(meetingId, userIds) {
    const data = {addUser: userIds};
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
    getUpcomingMeetingsForUser,
    get,
    edit,
    addParticipant,
    removeParticipant,
    create
}