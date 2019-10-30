import {SET_NETS, ADD, ADD_NUM} from './actionTypes';

export const setNets = netsList => ({
    type: SET_NETS,
    payload: netsList,
});

export const add = () => ({
    type: ADD
});

export const addNum = number => ({
    type: ADD_NUM,
    payload: number,
});
