export const ROUTE_UPDATE_DOUGH = 'routerinfo/ROUTE_UPDATE_DOUGH';
export const ROUTE_UPDATE_RESOURCE = 'routerinfo/ROUTE_UPDATE_RESOURCE';
export const ROUTE_UPDATE_BAR = 'routerinfo/ROUTE_UPDATE_BAR';
export const ROUTE_UPDATE_PATHNAME = 'router/ROUTE_UPDATE_PATHNAME';

const intialState = {
    doughData: {},
    resourceData: '',
    barData: '',
    chartType: '',
    pathName: '/'
}

export default (state = intialState, action) => {
    switch (action.type) {
        case ROUTE_UPDATE_DOUGH:
            return {
                ...state,
                doughData: Object.assign({}, action.payload),
                barData: ''
            };
        case ROUTE_UPDATE_RESOURCE:
            return {
                ...state,
                resourceData: action.payload
            }
        case ROUTE_UPDATE_BAR:
            return {
                ...state,
                barData: action.payload,
                doughData: {}
            }
        case ROUTE_UPDATE_PATHNAME:
            return {
                ...state,
                pathName: action.pathName
            }
        default: return state;
    }
}

export const onRouteUpdate = (data) => {
    return data;
}

export const pathEvent = (pathname) => {
    return {
        type: ROUTE_UPDATE_PATHNAME,
        pathName: pathname
    }
}