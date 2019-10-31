//import { combineReducers } from "redux";
import {SET_NETS, ADD_NET, GET_NET, CHANGE_STAT} from './actions/actionTypes';

// при объединении
// import {combineReducers} from 'redux';
// import reducer1 from 'path-to-file';
// import reducer2 from 'path-to-file';

// export default combineReducers({
//     reducer1, reducer2
// })


const initialState = {
    counter: 100,
    nets: [],
    stations: {},
    loadNetId: [],
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
                loadNetId: [...state.loadNetId, action.payload.id],
                stations: {
                    ...state.stations,
                    [action.payload.id]: action.payload.stations,
                }
            }
        case GET_NET:
            return {
                ...state,
                currentNetId: action.payload,
            }
        case CHANGE_STAT:
            const newStations = [...state.stations[state.currentNetId].stations];
            newStations[action.payload.index] = {
                ...newStations[action.payload.index],
                like: !newStations[action.payload.index].like
            }
            return {
                ...state,
                stations: {
                    ...state.stations,
                    [state.currentNetId]: {
                        ...state.stations[state.currentNetId],
                        stations: newStations,
                    }
                }                
            }        
        default:
            return state;
    }
}
