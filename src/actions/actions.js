import {SET_NETS, ADD_NET, SELECT_NET, CHANGE_STATION} from './actionTypes';

export const setNets = netsList => ({
    type: SET_NETS,
    payload: netsList,
});

export const addNet = (id,stations) => ({
    type: ADD_NET,
    payload: {
        id,
        stations,
    },
});

export const selectNet = (id) => ({
    type: SELECT_NET,
    payload: id,
});

export const changeStat = (index) => ({
    type: CHANGE_STATION,
    index,
});
