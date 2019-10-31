import {SET_NETS, ADD_NET, GET_NET, CHANGE_STAT} from './actionTypes';

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

export const getNet = (id) => ({
    type: GET_NET,
    payload: id,
});

export const changeStat = (id, index) => ({
    type: CHANGE_STAT,
    payload: {
        id,
        index,
    },
});
