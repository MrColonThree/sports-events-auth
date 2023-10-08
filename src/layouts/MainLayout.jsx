import { Outlet } from "react-router-dom";
import { CustomizeNavbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
const MainLayout = () => {
  return (
    <div>
      <CustomizeNavbar></CustomizeNavbar>
      <div className="min-h-[85vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
