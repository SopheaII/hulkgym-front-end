import { Home, BarChart3, PlusCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { webRoutes } from "../routes/web";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const isActive = (route: string) => location.pathname === route;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white backdrop-blur-lg border-t border-gray-200">
      <div className="max-w-md mx-auto flex justify-between px-12 py-4">
        <button
          className={isActive(webRoutes.home) ? "text-blue-500" : "text-gray-400"}
          onClick={() => navigate(webRoutes.home)}
        >
          <Home className="h-6 w-6" />
        </button>
        <button
          className={isActive(webRoutes.discover) ? "text-blue-500" : "text-gray-400"}
          onClick={() => navigate(webRoutes.discover)}
        >
          <BarChart3 className="h-6 w-6" />
        </button>
        <button
          // className={isActive(webRoutes.add) ? "text-blue-500" : "text-gray-400"}
          // onClick={() => navigate(webRoutes.add)}
        >
          <PlusCircle className="h-6 w-6" />
        </button>
        <button
        //   className={isActive(webRoutes.profile) ? "text-blue-500" : "text-gray-400"}
        //   onClick={() => navigate(webRoutes.profile)}
        >
          <User className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
