import React from 'react';
import { MapPin, Vote, Users, LayoutDashboard } from 'lucide-react';

const features = [
  {
    name: 'Interactive Mapping',
    description:
      'Explore underutilized spaces in your community with our interactive map. View zoning information and potential development opportunities.',
    icon: MapPin,
  },
  {
    name: 'Community Voting',
    description:
      'Have your say in how spaces are repurposed. Vote on proposals and submit your own ideas for community development.',
    icon: Vote,
  },
  {
    name: 'Collaboration Hub',
    description:
      'Connect with urban planners, developers, and community members. Work together to create sustainable solutions.',
    icon: Users,
  },
  {
    name: 'Impact Tracking',
    description:
      'Monitor the positive changes in your community through our comprehensive dashboard showing environmental and social impacts.',
    icon: LayoutDashboard,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Building Better Communities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools you need to participate in urban
            development and community building.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;