import CompetenceApi from "../api/mockHome.api";

export const GET_DASHBOARD = 'dashboard/GET_DASHBOARD';

const intialState = {
    competences: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD:
            return {
                ...state,
                competences: Object.assign([], action.competence)
            };
        default: return state;
    }
}

export const loadAllCompetence = (data) => {
    return {
        type: GET_DASHBOARD,
        competence: data
    }
}

// CompetenceApi.getAllCompetence()
//     .then(data => {
//         dispatch ({
//         type: GET_DASHBOARD,
//         payload: data
//     })}).catch(error => {
//         throw(error);
//     });

export const getAllCompetences = () => {
    return dispatch => CompetenceApi.getAllCompetence()
        .then(data => dispatch(loadAllCompetence(data)))
        .catch(error => { throw (error) });
}
