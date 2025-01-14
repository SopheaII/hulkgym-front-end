import React, { useEffect, useState } from "react";
import {
  User,
  Home,
  Target,
  Utensils,
  Moon,
  Heart,
  Bike,
  FootprintsIcon,
} from "lucide-react";
import { UserType } from "../../common/types/user";

const HomePage: React.FC = () => {
  const initData = window.Telegram?.WebApp?.initData;
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const [ userInfo, setUserInfo ] = useState<UserType>({id: "123", username: "test_name", first_name: "first_name", last_name: "last_name"})

  useEffect(() => {
    if(telegramUser) {
        setUserInfo(telegramUser)
    }
  }, [])
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-16 text-black">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={userInfo.photo_url}
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-500 text-sm">Good day,</p>
            <h1 className="text-lg font-semibold">{userInfo.first_name}</h1>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Walk Card */}
          <div className="bg-teal-500 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <FootprintsIcon className="h-5 w-5" />
              <span>Walk</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="45"
                    fill="none"
                    stroke="white"
                    strokeWidth="6"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    className="transition-all duration-1000 ease-in-out"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-2xl font-bold">4,235</span>
                  <span className="block text-sm">Steps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Moon className="h-5 w-5 text-blue-600" />
              <span>Sleep</span>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">5.3</span>
              <span className="text-gray-500 ml-1">Hours</span>
            </div>
          </div>

          {/* Heart Rate Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Heart</span>
            </div>
            <div className="relative h-8 mb-2">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <path
                  d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold">80</span>
            <span className="text-gray-500 text-sm ml-1">Bpm</span>
          </div>

          {/* Exercise Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <rect x="4" y="8" width="2" height="12" fill="#6366f1" />
                <rect x="8" y="5" width="2" height="15" fill="#6366f1" />
                <rect x="12" y="2" width="2" height="18" fill="#6366f1" />
                <rect x="16" y="6" width="2" height="14" fill="#6366f1" />
                <rect x="20" y="9" width="2" height="11" fill="#6366f1" />
              </svg>
              <span>Exercise</span>
            </div>
            <span className="text-2xl font-bold">5</span>
            <span className="text-gray-500 text-sm ml-1">Hours</span>
          </div>

          {/* Cycling Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-5 w-5 text-orange-500" />
              <span>Cycling</span>
            </div>
            <span className="text-2xl font-bold">5</span>
            <span className="text-gray-500 text-sm ml-1">Hours</span>
          </div>

          {/* Calories Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 4"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Calories</span>
            </div>
            <div className="relative inline-flex">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeDasharray="189"
                  strokeDashoffset="47"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-xl font-bold">153</span>
                <span className="block text-xs text-gray-500">kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-around py-3">
          <button className="flex flex-col items-center text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Target className="h-6 w-6" />
            <span className="text-xs mt-1">Goals</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Utensils className="h-6 w-6" />
            <span className="text-xs mt-1">Diet</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">User</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
