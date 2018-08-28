import CompetenceApi from "../api/mockHome.api";
import POCApi from "../api/mockPoc.api"
import competenceService from "../services/competence.service";
import { addResourcePerCompetence } from "./resCompetence"
export const GET_DASHBOARD = 'dashboard/GET_DASHBOARD';
export const GET_POC = 'dashboard/GET_POC';


const intialState = {
    competences: [],
    poc: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD:
            return {
                ...state,
                competences: Object.assign([], action.competence)
            };
        case GET_POC:
            return {
                ...state,
                poc: Object.assign([], action.pocList)
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

export const loadAllPOC = (data) => {
    return {
        type: GET_POC,
        pocList: data
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

export const getAllPOC = () => {
    return (dispatch) => {
        POCApi.getAllPOC()
            .then(data => {
                return dispatch(loadAllPOC(data));
            })
            .catch(error => { throw (error) });
    }
}

