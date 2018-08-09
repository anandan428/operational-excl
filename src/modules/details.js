import Resourse from "../api/mockDetails.api";

export const GET_ALLDETAILS = 'details/GET_ALLDETAILS';

const intialState = {
    details: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_ALLDETAILS:
            return {
                ...state,
                details: Object.assign([], action.details)
            };
        default: return state;
    }
}

export const loadAllDetails = (data) => {
    return {
        type: GET_ALLDETAILS,
        details: data
    }
}

export const getAllDetails = () => {
    return dispatch => Resourse.getAllResourses()
        .then(data => dispatch(loadAllDetails(data)))
        .catch(error => { throw error });
}