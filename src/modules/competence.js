import CompetenceApi from "../api/mockHome.api";
import competenceService from "../services/competence.service";
import { addResourcePerCompetence } from "./resCompetence"
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

