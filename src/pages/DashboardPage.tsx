import React from 'react';
import { LayoutDashboard, TrendingUp, Activity, Calendar } from 'lucide-react';
import Stats from '../components/Stats';

const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <LayoutDashboard className="h-8 w-8 text-emerald-600" />
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            Dashboard
          </h2>
        </div>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Your Impact Overview
        </p>
      </div>

      <Stats />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-medium">Voted on Community Garden Project</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-medium">Commented on Housing Proposal</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-medium">Community Planning Workshop</p>
                <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-medium">Project Review Meeting</p>
                <p className="text-xs text-gray-500">Friday, 3:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;