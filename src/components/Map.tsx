import React from 'react';
import { MapPin, Plus } from 'lucide-react';

const Map = () => {
  const mockProjects = [
    { id: 1, lat: 40, lng: -74, type: 'housing' },
    { id: 2, lat: 40.1, lng: -74.1, type: 'green_space' },
  ];

  return (
    <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        {/* Mock map markers */}
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: '50%', top: '50%' }}
          >
            <MapPin className="h-6 w-6 text-emerald-600" />
            <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg text-sm">
              {project.type === 'housing' ? 'Housing Project' : 'Green Space'}
            </div>
          </div>
        ))}
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50">
          <Plus className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold text-sm mb-2">Legend</h3>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-600" />
          <span className="text-sm text-gray-600">Available Spaces</span>
        </div>
      </div>
    </div>
  );
};

export default Map;