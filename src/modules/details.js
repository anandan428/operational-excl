import Resourse from "../api/mockDetails.api";
import competenceService from "../services/competence.service";
import { addResourcePerCompetence } from "./resCompetence"

export const GET_ALLDETAILS = 'details/GET_ALLDETAILS';

const intialState = {
    details: [],
    resourceCompetence: []
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
    return (dispatch, getState) => {
        Resourse.getAllResourses()
            .then(data => {
                const { competence } = getState();
                if(competence.competences.length > 0){
                    competenceService.prepareDataForGraph(competence.competences, data).then(data => dispatch(addResourcePerCompetence(data)));
                }
                dispatch(loadAllDetails(data));
            })
            .catch(error => { throw error })
    };
}