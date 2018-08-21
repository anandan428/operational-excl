export const ROUTE_UPDATE_DOUGH = 'routerinfo/ROUTE_UPDATE';
export const ROUTE_UPDATE_RESOURCE = 'routerinfo/ROUTE_UPDATE_RESOURCE';


const intialState = {
    doughData: {},
    resourceData: ''
}

export default (state = intialState, action) => {
    switch (action.type) {
        case ROUTE_UPDATE_DOUGH:
            return {
                ...state,
                doughData: Object.assign({}, action.payload)
            };
        case ROUTE_UPDATE_RESOURCE:
            return {
                ...state,
                resourceData: action.payload
            }
        default: return state;
    }
}

export const onRouteUpdate = (data) => {
    return data;
}