import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import CustomizeNavbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="relative">
      <CustomizeNavbar></CustomizeNavbar>
      <div className="min-h-[85vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
