import {call, put, select} from 'redux-saga/effects';
import * as actions from './actions/actions';
import * as api from './api';
import * as selectors from './selectors';

// это будет сага отображения сети
export function* displayNetSaga(action) {
    yield call(console.log, action);
    const selectedStations = yield select(selectors.getStations);
    console.log(selectedStations[action.payload]);
}

export function* initAppSaga() {
    yield call(console.log, 'INIT APP');
    const response = yield call(api.getNetsFromApi);
    yield put(actions.setNets(response.data.networks));
}
