import { all, fork } from "redux-saga/effects";

//public
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import resetPasswordSaga from "./auth/resetpwd/saga";
import LayoutSaga from "./layout/saga";
import calendarSaga from "./calendar/saga";
import chatSaga from "./chat/saga";
import projectsSaga from "./projects/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(resetPasswordSaga),
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(projectsSaga),
  ]);
}
