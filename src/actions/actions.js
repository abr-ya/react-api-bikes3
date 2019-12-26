import * as actionTypes from './actionTypes';

// reducers actions
export const setNets = netsList => ({
    type: actionTypes.SET_NETS,
    payload: netsList,
});

export const setNetStations = (id,stations) => ({
    type: actionTypes.SET_NET_STATIONS,
    payload: {
        id,
        stations,
    },
});

export const selectNet = (id) => ({
    type: actionTypes.SELECT_NET,
    payload: id,
});

export const changeStat = (index) => ({
    type: actionTypes.CHANGE_STATION,
    index,
});


// sagas actions
export const initApp = () => ({
    type: actionTypes.INIT_APP,
});

export const displayNet = (id, stations) => ({
    type: actionTypes.DISPLAY_NET,
    id,
    stations,
});
