import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USERS_FETCH, GET_USERS_SUCCESS} from './actions';
import axios from 'axios';

function usersFetch(){
    return axios.request({
        method: 'get',
        url: 'http://localhost:8080/api/admin/all-users'
    }).then(response => response)
}
function* workGetUsersFetch(){
    const users = yield call(usersFetch);
    yield put({type: GET_USERS_SUCCESS, users})
}
function* mySaga(){
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}
export default mySaga;
