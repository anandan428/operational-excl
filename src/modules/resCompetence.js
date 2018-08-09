import competenceService from "../services/competence.service";

export const UPDATE_RESOURCECOMPETENCE = 'resCompetence/UPDATE_RESOURCECOMPETENCE';
export const GET_REQUESTEDDATA = 'resCompetence/GET_REQUESTEDDATA';
export const GET_REQUESTEDAREA = 'resCompetence/GET_REQUESTEDAREA'

const intialState = {
    resourcePerCompetence: [],
    requestedData: [],
}

export default (state = intialState, action) => {
    switch (action.type) {
        case UPDATE_RESOURCECOMPETENCE:
        return {
            ...state,
            resourcePerCompetence: Object.assign([], action.resourcePerCompetence)
        }
        case GET_REQUESTEDDATA: 
        return {
            ...state,
            requestedData: Object.assign([], action.requestedData)
        }
        default: return state;
    }
}

export const addResourcePerCompetence = (data) => {
    return {
        type: UPDATE_RESOURCECOMPETENCE,
        resourcePerCompetence: data
    }
}

export const addRequestedData = (data) => {
    return {
        type: GET_REQUESTEDDATA,
        requestedData: data
    }
}

export const getRequestedData = (learningGroupID, techId) => {
    return (dispatch, getState) => {
        let { details } = getState();
        if(details.details.length > 0){
            dispatch(addRequestedData(competenceService.getEmpDetails(learningGroupID, techId, details.details)))
        }
    }
}
