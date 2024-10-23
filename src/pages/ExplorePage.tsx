import React from 'react';
import Map from '../components/Map';
import ProjectCard from '../components/ProjectCard';

const mockProject = {
  id: '1',
  title: 'Community Garden & Housing Complex',
  description: 'A mixed-use development combining affordable housing with community green spaces.',
  location: { lat: 40.7128, lng: -74.0060 },
  status: 'in_progress' as const,
  votes: 234,
  type: 'housing' as const,
  impact: {
    housingUnits: 120,
    greenSpace: 5000,
    carbonReduction: 50,
  },
  createdAt: '2024-03-22T10:00:00Z',
  updatedAt: '2024-03-22T10:00:00Z',
};

const ExplorePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
          Explore
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Discover Available Spaces
        </p>
      </div>
      <Map />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[mockProject, {...mockProject, id: '2'}, {...mockProject, id: '3'}].map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;