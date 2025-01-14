import { useEffect, useState } from "react";
import HomePage from "./pages/homePage/homPage";

const App = () => {
  const [testData, setData] = useState("")
  const [photo, setUserInfo] = useState("")
  const initData = window.Telegram.WebApp.initData;
  const userInfo = window.Telegram.WebApp.initDataUnsafe?.user;

  useEffect(() => {
    setUserInfo(userInfo.photo_url)

  }, [])

  const handleSendRequest = async () => {
    if (window.Telegram?.WebApp) {

      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/validate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ initData, userInfo }),
        });
        const data = await response.json();
        console.log("Backend response:", data);
        setData(data.message)
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Telegram WebApp not available.");
    }
  };

  return (
    // <><button onClick={handleSendRequest}>
    //   Send Telegram Data to Backend
    // </button>
    // <p>
    //     test: {testData}
    //   </p>
    //   <img src={photo} alt="User Profile Photo"/>

    // </>
    <HomePage/>
  );
};

export default App;

