import {takeLatest} from 'redux-saga/effects';
import * as actionTypes from './actions/actionTypes';
import * as sagas from './sagas';

export default function* rootSaga() {
	yield takeLatest(actionTypes.INIT_APP, sagas.initAppSaga);	
	yield takeLatest(actionTypes.DISPLAY_NET, sagas.displayNetSaga);
	//yield takeLatest(authActionTypes.VERIFY_TOKEN, verifyTokenSaga);
	//yield takeLatest(authActionTypes.REFRESH_TOKEN, refreshTokenSaga);
}
