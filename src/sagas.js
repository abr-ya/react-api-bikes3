import {call, put} from 'redux-saga/effects';
import * as actions from './actions/actions';
import * as api from './api';

// это была какая-то пробная сага!
export function* setNetSaga() {
    // const response = yield call(requestNetes, 'setNetSaga');
    // yield put(setNetes(response.data.data));
    yield call(console.log, 'set NETES');
}

export function* initAppSaga() {
    yield call(console.log, 'INIT APP');
    const response = yield call(api.getNetsFromApi);
    yield put(actions.setNets(response.data.networks));
}
