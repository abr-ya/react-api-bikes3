import * as actionTypes from './actions/actionTypes';

const initialState = {
    nets: [],
    stations: {},
    currentNetId: undefined,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_NETS:
            return {
                ...state,
                nets: action.payload,
            }
        case actionTypes.SET_NET_STATIONS:
            return {
                ...state,
                currentNetId: action.payload.id,
                stations: {
                    ...state.stations,
                    [action.payload.id]: action.payload.stations,
                }
            }
        case actionTypes.SELECT_NET:
            return {
                ...state,
                currentNetId: action.payload,
            }
        case CHANGE_STATION:
            const stations = [...state.stations[state.currentNetId]];
            stations[action.index].liked = !stations[action.index].liked;

            return {...state, stations: {
                ...state.stations,
                [state.currentNetId]: stations,
            }}
        default:
            return state;
    }
}
