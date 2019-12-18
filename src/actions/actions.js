import * as actionTypes from './actionTypes';

export const setNets = netsList => ({
    type: actionTypes.SET_NETS,
    payload: netsList,
});

export const addNet = (id,stations) => ({
    type: actionTypes.ADD_NET,
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

export const initApp = () => ({
    type: actionTypes.INIT_APP,
});
