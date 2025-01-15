import { useEffect, useState } from "react";
import { Router, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import axios from "axios";
import api from './service/api'

const App = () => {

  const initData = window.Telegram.WebApp.initData;
  const userInfo = window.Telegram.WebApp.initDataUnsafe?.user;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const login = async () => {
      await handleSendRequest();
    };
    login();
  }, []);

  const handleSendRequest = async () => {
    if (window.Telegram?.WebApp) {
      try {

        await api.signin({ initData, userInfo })
        .then( data => {
          console.log("Backend response:", data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        })
  
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Telegram WebApp not available.");
    }
  };
  

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen bg-white text-black" style={{ textAlign: "center" }}>
          Loading...
        </div>
      ) : (
          <RouterProvider router={appRoutes} />
      )}
      {/* <RouterProvider router={appRoutes} /> */}
   </>
  );
};

export default App;
