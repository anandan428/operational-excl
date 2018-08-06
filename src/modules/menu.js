export const HIGHLIGHT = 'menu/HIGHLIGHT'

const intialState = {
    currentID: 0
}

export default (state = intialState, action) => {
    switch(action.type) {
        case HIGHLIGHT:
        return {
            ...state,
            currentID: action.ID
        }
        default: 
        return state;
    }
}

export const changeID = (id) => {
    return dispatch => {
        dispatch({
            type: HIGHLIGHT,
            ID: id
        });
    }
}