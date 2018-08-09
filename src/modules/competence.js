import CompetenceApi from "../api/mockHome.api";
import competenceService from "../services/competence.service";
export const GET_DASHBOARD = 'dashboard/GET_DASHBOARD';
export const UPDATE_RESOURCECOMPETENCE = 'dashboard/UPDATE_RESOURCECOMPETENCE';



const intialState = {
    competences: [],
    resourcePerCompetence: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD:
            return {
                ...state,
                competences: Object.assign([], action.competence)
            };
        case UPDATE_RESOURCECOMPETENCE:
            return {
                ...state,
                resourcePerCompetence: Object.assign([], action.resourcePerCompetence)
            }
        default: return state;
    }
}

export const loadAllCompetence = (data) => {
    return {
        type: GET_DASHBOARD,
        competence: data
    }
}

export const getAllCompetences = () => {
    return (dispatch, getState) => {
        CompetenceApi.getAllCompetence()
            .then(data => {
                let { details } = getState();
                if (details.details.length > 0) {
                    competenceService.prepareDataForGraph(data, details.details).then(data => dispatch(addResourcePerCompetence(data)));
                }
                dispatch(loadAllCompetence(data));
            })
            .catch(error => { throw (error) });
    }
}

export const addResourcePerCompetence = (data) => {
    return {
        type: UPDATE_RESOURCECOMPETENCE,
        resourcePerCompetence: data
    };
}
