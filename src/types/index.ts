export interface Project {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'proposed' | 'approved' | 'in_progress' | 'completed';
  votes: number;
  type: 'housing' | 'commercial' | 'community' | 'green_space';
  impact: {
    housingUnits?: number;
    greenSpace?: number;
    carbonReduction?: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  role: 'developer' | 'planner' | 'community';
  email: string;
  avatar?: string;
}