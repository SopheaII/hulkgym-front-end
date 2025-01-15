import { Outlet } from "react-router-dom";
import BottomNav from "./bottomNav";

const Layout = () => {
  return (
    <div
      className="bg-gray-50 text-gray-900 px-4 pt-5 pb-20 mb-12">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout; 
