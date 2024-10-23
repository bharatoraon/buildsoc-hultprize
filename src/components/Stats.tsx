import React from 'react';
import { Home, TreePine, Users, Sprout } from 'lucide-react';

const stats = [
  {
    name: 'Housing Units Created',
    value: '2,500+',
    icon: Home,
    change: '+15%',
  },
  {
    name: 'Green Space Added',
    value: '50,000 m²',
    icon: TreePine,
    change: '+12%',
  },
  {
    name: 'Active Community Members',
    value: '15,000',
    icon: Users,
    change: '+25%',
  },
  {
    name: 'Carbon Reduction',
    value: '1,200 tons',
    icon: Sprout,
    change: '+18%',
  },
];

const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            Impact
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Making Real Change
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-emerald-500 rounded-md p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;