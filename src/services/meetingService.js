import httpService from "./httpService";

const endPoint = "/meeting";

function getAllMeetings() {
    return httpService.get(endPoint);
}

export default {
    getAllMeetings
}