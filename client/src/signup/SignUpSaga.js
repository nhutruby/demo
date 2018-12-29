import {call, put, take, fork} from "redux-saga/effects";
import axios from "axios";

function signUp(signUpParams) {
  console.log("signup");
  console.log(signUpParams);
  return axios.request({method: "post", url: "/users/", data: signUpParams});
}

function* workerSignUp() {
  while (true) {
    try {
      const request = yield take("SIGN_UP");
      const signUpParams = request.payload;
      const response = yield call(signUp, signUpParams);
      const user = response.data;
      yield put({type: "SIGN_UP_SUCCESS", user});
    } catch (error) {
      console.log("fail");
      console.log(error.response.data);
      const message = error.response.data.error;
      yield put({type: "SIGN_UP_FAIL", message});
    }
  }
}
export default function* watcherSignUp() {
  yield fork(workerSignUp);
}
