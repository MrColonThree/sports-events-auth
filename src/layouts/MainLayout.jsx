import { Outlet } from "react-router-dom";
import  { CustomizeNavbar } from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <CustomizeNavbar></CustomizeNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
