import Notification from "../pages/notification";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";

// import ErrorPage from "../pages/view/ErrorPage";
const routes = [
    {
        path: "/dashboard",
        exact: true,
        auth: true,
        component: <Dashboard title="Dashboard" />
    },
    {
        path: "/profile",
        exact: true,
        auth: true,
        component: <Profile title="Dashboard" />
    },
    {
        path: "/notification",
        exact: true,
        auth: true,
        component: <Notification title="Dashboard" />
    },
   
 
]

export default routes;