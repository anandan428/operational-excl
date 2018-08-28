export const ROUTE_UPDATE_DOUGH = 'routerinfo/ROUTE_UPDATE_DOUGH';
export const ROUTE_UPDATE_RESOURCE = 'routerinfo/ROUTE_UPDATE_RESOURCE';
export const ROUTE_UPDATE_BAR = 'routerinfo/ROUTE_UPDATE_BAR'

const intialState = {
    doughData: {},
    resourceData: '',
    barData: ''
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
        case ROUTE_UPDATE_BAR:
            return {
                ...state,
                barData: action.payload
            }
        default: return state;
    }
}

export const onRouteUpdate = (data) => {
    return data;
}