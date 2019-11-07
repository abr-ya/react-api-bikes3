//import { combineReducers } from "redux";
import {SET_NETS, ADD_NET, SELECT_NET, CHANGE_STATION} from './actions/actionTypes';

// при объединении
// import {combineReducers} from 'redux';
// import reducer1 from 'path-to-file';
// import reducer2 from 'path-to-file';

// export default combineReducers({
//     reducer1, reducer2
// })


const initialState = {
    nets: [],
    stations: {},
    currentNetId: undefined,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_NETS:
            return {
                ...state,
                nets: action.payload,
            }
        case ADD_NET:
            return {
                ...state,
                currentNetId: action.payload.id,
                stations: {
                    ...state.stations,
                    [action.payload.id]: action.payload.stations,
                }
            }
        case SELECT_NET:
            return {
                ...state,
                currentNetId: action.payload,
            }
        case CHANGE_STATION:
            const changedStation = state.stations[state.currentNetId][action.index];
            changedStation.liked = !changedStation.liked;
            const stations = {...state.stations};
            stations[state.currentNetId][action.index] = changedStation;
            return {...state, stations}
        default:
            return state;
    }
}
