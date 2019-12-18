import {takeLatest} from 'redux-saga/effects';
import * as actionTypes from './actions/actionTypes';
import {setNetSaga, initAppSaga} from './sagas';

export default function* rootSaga() {
	yield takeLatest(actionTypes.SET_NETS, setNetSaga);
	yield takeLatest(actionTypes.INIT_APP, initAppSaga);
	//yield takeLatest(authActionTypes.VERIFY_TOKEN, verifyTokenSaga);
	//yield takeLatest(authActionTypes.REFRESH_TOKEN, refreshTokenSaga);
}
