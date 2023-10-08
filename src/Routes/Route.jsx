import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/Home/Services/ServiceDetails";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import ErrorPage from "../pages/ErrorPage";
import MemberShip from "../pages/MemberShip";
import Events from "../pages/Events/Events";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/membership",
        element: <MemberShip></MemberShip>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
