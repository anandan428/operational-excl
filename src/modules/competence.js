import CompetenceApi from "../api/mockHome.api";
import POCApi from "../api/mockPoc.api"
import competenceService from "../services/competence.service";
import { addResourcePerCompetence } from "./resCompetence"
import EventApi from "../api/mockEvent.api";
export const GET_DASHBOARD = 'dashboard/GET_DASHBOARD';
export const GET_POC = 'dashboard/GET_POC';
export const GET_EVENTS = 'dashboard/GET_EVENTS';

const intialState = {
    competences: [],
    poc: [],
    event: []
}

//Reducer
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
                poc: [...action.pocList.values()]
            }
        case GET_EVENTS:
        return {
            ...state,
            event: [...action.eventList.values()]
        }
        default: return state;
    }
}
//Action
export const loadAllCompetence = (data) => {
    return {
        type: GET_DASHBOARD,
        competence: data
    }
}
//Action
export const loadAllPOC = (data) => {
    return {
        type: GET_POC,
        pocList: data
    }
}
<<<<<<< HEAD
//Action
=======

export const loadAllEvents = (data) => {
    return {
        type: GET_EVENTS,
        eventList: data
    }
}

>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
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
//Action
export const getAllPOC = () => {
    return (dispatch) => {
        POCApi.getAllPOC()
            .then(data => {
                return dispatch(loadAllPOC(data));
            })
            .catch(error => { throw (error) });
    }
}

export const getAllEvents = () => {
    return (dispatch) => {
        EventApi.getAllEvents()
            .then(data => {
                return dispatch(loadAllEvents(data));
            })
            .catch(error => { throw (error) });
    }
}