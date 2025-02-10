import React, { useEffect, useState } from "react";
import { Bell, ChevronRight, TrendingUp } from "lucide-react";
import { UserType } from "../../common/types/user";
import api from "~/service/api";

type ActivityResponse = {
  id: string;
  title: string;
  icon: string;
  sets: number;
  reps: number;
  currentSet: number;
};

const HomePage: React.FC = () => {
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const [userInfo, setUserInfo] = useState<UserType>({
    id: "123",
    username: "test_name",
    first_name: "first_name",
    last_name: "last_name",
  });
  const [activity, setActivity] = useState<ActivityResponse[]>([]);

  useEffect(() => {
    if (telegramUser) {
      setUserInfo(telegramUser);
    }

    const fetData = async () => {
      await handleActivityRequest();
    };
    fetData();
  }, []);

  const handleActivityRequest = async () => {
    try {
      await api
        .getActivity()
        .then((data) => {
          console.log("Backend response:", data);
          const result = data as ActivityResponse[];
          setActivity(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" bg-gray-50 text-gray-900 px-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <img
            src={userInfo.photo_url}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-200"
          />
          <div>
            <p className="text-sm text-gray-500">Welcome back</p>
            <h1 className="font-semibold">{userInfo.first_name}</h1>
          </div>
        </div>
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>

      {/* Workout Progress */}
      <div className="bg-white rounded-xl p-4 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold text-lg">Workout Progress</h2>
            <p className="text-sm text-gray-500">12 Exercise left</p>
          </div>
          <div className="relative w-16 h-16">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="8"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="8"
                strokeDasharray="175.93"
                strokeDashoffset="26.39"
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
              85%
            </span>
          </div>
        </div>
      </div>

      {/* Today's Activity */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Today's Activity</h2>
          <button className="text-sm text-gray-500">Edit</button>
        </div>

        <div className="space-y-4">
          {activity.length > 0 &&
            activity.map((item, index) => (
              index == 0 ?
                <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-pink-100">
                          Sets: {item.sets}, {item.reps} reps/set
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold">{(item.sets - item.currentSet)*item.reps}</span>
                  </div>
                  <div className="w-full bg-pink-600/30 rounded-full h-1.5">
                    <div
                      className="bg-white h-1.5 rounded-full"
                      style={{ width: `${item.currentSet/item.sets*100}%` }}
                    ></div>
                  </div>
                </div>
                :
                <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">Sets: {item.sets}, {item.reps} reps/set</p>
                  </div>
                </div>
                <span className="font-semibold">{(item.sets - item.currentSet)*item.reps}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            ))}
        </div>
      </div>

      {/* Overall Status */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Overall Status</h2>
          <button className="flex items-center text-sm text-gray-500">
            See more <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 mb-3">
              <span className="text-xl">🔥</span>
              <span className="text-sm">Calories</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">12,182 kcal</span>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +4.5%
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-purple-500 mb-3">
              <span className="text-xl">⚖️</span>
              <span className="text-sm">Weight loss</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">10.7kg</span>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +2.8%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
