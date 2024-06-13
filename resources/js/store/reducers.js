import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import resetPassword from "./auth/resetpwd/reducer";


//Calendar
import calendar from "./calendar/reducer";

//chat
import chat from "./chat/reducer";


//projects
import projects from "./projects/reducer";


//Dashboard 
import Dashboard from "./dashboard/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Account,
  ForgetPassword,
  resetPassword,
  calendar,
  chat,
  projects,
  Dashboard,
});

export default rootReducer;
