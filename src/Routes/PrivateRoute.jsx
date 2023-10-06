import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Spinner color="purple" className="h-12 w-12" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
