import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../../../features/home/HomePage";
import ActivityForm from "../../../features/activities/form/ActivityForm";
import ActivityDashboard from "../../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../../features/activities/activitiesDetails/ActivityDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key="create" /> },
            { path: 'manage/:id', element: <ActivityForm key="manage" /> },
        ]
    },

]);