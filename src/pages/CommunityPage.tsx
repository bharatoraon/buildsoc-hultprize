import React from 'react';
import { Users, MessageSquare, Calendar, Award } from 'lucide-react';

const CommunityPage = () => {
  const events = [
    {
      id: 1,
      title: 'Community Planning Workshop',
      date: '2024-04-15',
      time: '14:00',
      location: 'Community Center',
      attendees: 45,
    },
    {
      id: 2,
      title: 'Green Space Design Meeting',
      date: '2024-04-18',
      time: '16:00',
      location: 'Virtual',
      attendees: 32,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="h-8 w-8 text-emerald-600" />
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            Community Hub
          </h2>
        </div>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Connect & Collaborate
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
          </div>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border-b pb-4">
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-gray-600">
                  {event.date} at {event.time}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-gray-600">{event.location}</span>
                  <span className="text-sm text-emerald-600">
                    {event.attendees} attending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion Forums */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold">Recent Discussions</h3>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-medium">Sustainable Housing Solutions</h4>
              <p className="text-sm text-gray-600">32 replies · Updated 2h ago</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-medium">Green Space Design Ideas</h4>
              <p className="text-sm text-gray-600">18 replies · Updated 5h ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;