import ArticlesApi from "../api/mockArticles";

export const GET_ALLARTICLES = 'dashboard/GET_ALLARTICLES';

const intialState = {
    art: [],
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_ALLARTICLES:
            return {
                ...state,
                art: Object.assign([], action.articles)
            };
        default: return state;
    }
}

export const loadAllArticles = (data) => {
    return ({
        type: GET_ALLARTICLES,
        articles: data
    })
}

export const getAllArticles = () => {
    return (dispatch) => {
        ArticlesApi.getAllArticles()
            .then(data => { return dispatch(loadAllArticles(data)) })
    }
}