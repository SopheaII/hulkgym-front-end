import React from 'react';
import { Bell, Star } from 'lucide-react';
import axios from 'axios';

const DiscoverPage: React.FC = () => {
  return (
    <div className=" mb-1 overflow-x-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 px-4">
        <h1 className="text-2xl font-bold">Discover</h1>
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>

      {/* Popular Exercises */}
      <div className="mb-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Popular Exercises</h2>
          <button className="text-sm text-gray-500">See more →</button>
        </div>
 
        <div className="w-full flex pb-2 overflow-x-auto gap-4">
          <div className="flex-shrink-0 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl p-4 text-white">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">4.9</span>
            </div>
            <h3 className="font-semibold mb-1">Home Workout</h3>
            <p className="text-sm text-rose-100 mb-4">12 Exercise</p>
            <img
              src="/gym1.png?height=128&width=384"
              alt="Person exercising"
              className="w-40 h-40 object-contain rounded-xl"
            />
          </div>

          <div className="flex-shrink-0 w-48 bg-gray-900 rounded-xl p-4 text-white">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">4.9</span>
            </div>
            <h3 className="font-semibold mb-1">Hand Exercise</h3>
            <p className="text-sm text-gray-400 mb-4">12 Exercise</p>
            <img
              src="/gym2.png?height=128&width=384"
              alt="Hand exercise"
              className="w-40 h-40 object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Collection */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Our Collection</h2>
        <div className="space-y-4">
          <div className="relative h-32 rounded-xl w-full overflow-hidden">
            <img
              src="/gym3.png?height=128&width=384"
              alt="Chest exercises"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm bg-white/20 px-2 py-1 rounded-full">
                  12 Exercise
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Chest & abdominal exercises
              </h3>
            </div>
          </div>

          <div className="relative h-32 rounded-xl overflow-hidden">
            <img
              src="/gym3.png?height=128&width=384"
              alt="Back exercises"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm bg-white/20 px-2 py-1 rounded-full">
                  12 Exercise
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Back & shoulder exercises
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
