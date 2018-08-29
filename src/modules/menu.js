export const HIGHLIGHT = 'menu/HIGHLIGHT'

const intialState = {
    currentID: ''
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
    return {
        type: HIGHLIGHT,
        ID: id
    }
}