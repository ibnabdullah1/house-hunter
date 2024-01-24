import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../components/AllProperties/AllHouse";
import DashboardLayout from "../Layout/DashboardLayout";
import UpdateForm from "../components/Form/UpdateForm";
import Dashboard from "../components/Dashboard/Dashboard";
import AddHouse from "../Pages/AddHouse/AddHouse";
import AllHouse from "../components/AllProperties/AllHouse";
import BookingForm from "../components/Form/BookingForm";
import ManageHouses from "../components/ManageHouses/ManageHouses";
import ManageBooking from "../Pages/ManageBooking/ManageBooking";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },

      {
        path: "/all-house",
        element: <AllHouse />,
      },
      {
        path: "booking/:id",
        element: <BookingForm />,
        loader: ({ params }) =>
          fetch(`https://server-indol-sigma.vercel.app/booking/${params.id}`),
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      // user Dashboards
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-house",
        element: <AddHouse />,
      },
      {
        path: "manage-houses",
        element: <ManageHouses />,
      },
      {
        path: "manage-bookings",
        element: <ManageBooking />,
      },
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path: "manage-houses/update/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(`https://server-indol-sigma.vercel.app/houses/${params.id}`),
      },
    ],
  },
]);
export default router;
