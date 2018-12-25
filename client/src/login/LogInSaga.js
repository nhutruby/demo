import {takeLatest, call, put, take} from "redux-saga/effects";
import * as actions from "./LogInAction";
import axios from "axios";
export function* watcherSignIn() {
  yield takeLatest(actions.signIn, workerLogIn);
}

function logIn(authParams) {
  return axios.request({method: "post", url: "/users", data: authParams});
}

function* workerLogIn() {
  try {
    const request = yield take(actions.logIn);
    const authParams = request.authParams;
    const response = yield call(logIn, authParams);
    const user = response.data.message;
    yield put({type: "LOG_IN_SUCCESS", user});
  } catch (error) {
    yield put({type: "LOG_IN_FAIL", error});
  }
}
