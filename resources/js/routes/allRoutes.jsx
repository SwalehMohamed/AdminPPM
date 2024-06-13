

// Pages Component
import Chat from "../pages/Chat/Chat";


// Pages Calendar
import Calendar from "../pages/Calendar/index";


// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import ResetPassword from "../pages/Authentication/ResetPassword";

//Projects
import ProjectsGrid from "../pages/Projects/projects-grid";
import ProjectsList from "../pages/Projects/projects-list";
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview";
import ProjectsCreate from "../pages/Projects/projects-create";

import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  //Index Main
  {
    path: "/",
    exact: true,
    component: <Dashboard />,
  },

  { path: "/dashboard", component: <Dashboard /> },

  //chat
  { path: "/chat", component: <Chat /> },


  //calendar
  { path: "/calendar", component: <Calendar /> },



  //Projects
  { path: "/projects-grid", component: <ProjectsGrid /> },
  { path: "/projects-list", component: <ProjectsList /> },
  { path: "/projects-overview", component: <ProjectsOverview /> },
  { path: "/projects-overview/:id", component: <ProjectsOverview /> },
  { path: "/projects-create", component: <ProjectsCreate /> },

];


const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/reset-password/:token", component: <ResetPassword /> },

];

export { publicRoutes, authProtectedRoutes };
