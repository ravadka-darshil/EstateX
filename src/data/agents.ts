
import { AgentType } from '@/types/agent';

export const agents: AgentType[] = [
  {
    id: "agent1",
    name: "John Smith",
    email: "john@estatex.com",
    phone: "555-123-4567",
    avatar: "/placeholder.svg",
    bio: "With over 10 years of experience in real estate, John specializes in luxury properties and first-time home buyers.",
    role: 'admin',
    specialties: ["Luxury Homes", "First-Time Buyers", "Commercial"],
    location: "New York City"
  },
  {
    id: "agent2",
    name: "Sarah Johnson",
    email: "sarah@estatex.com",
    phone: "555-987-6543",
    avatar: "/placeholder.svg",
    bio: "Sarah has been helping families find their dream homes for over 5 years, with a focus on suburban properties.",
    role: 'agent',
    specialties: ["Family Homes", "Suburban Properties"],
    location: "Arlington, VA"
  },
  {
    id: "agent3",
    name: "Michael Rodriguez",
    email: "michael@estatex.com",
    phone: "555-567-8901",
    avatar: "/placeholder.svg",
    bio: "Michael brings a wealth of knowledge in investment properties and market analysis to help clients make informed decisions.",
    role: 'agent',
    specialties: ["Investment Properties", "Market Analysis"],
    location: "Chicago"
  },
  {
    id: "agent4",
    name: "Emily Chang",
    email: "emily@estatex.com",
    phone: "555-234-5678",
    avatar: "/placeholder.svg",
    bio: "As a former interior designer, Emily has a unique eye for property potential and specializes in home staging.",
    role: 'agent',
    specialties: ["Property Staging", "Urban Lofts"],
    location: "San Francisco"
  },
  {
    id: "agent5",
    name: "David Washington",
    email: "david@estatex.com",
    phone: "555-345-6789",
    avatar: "/placeholder.svg",
    bio: "David specializes in commercial real estate and has helped numerous businesses find their ideal locations.",
    role: 'agent',
    specialties: ["Commercial", "Office Space", "Retail"],
    location: "Boston"
  }
];
