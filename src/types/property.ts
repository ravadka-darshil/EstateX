
// This would be your existing property.ts file
// I'm only showing the additions/changes to PropertyType

export interface PropertyType {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  yearBuilt: number;
  features: string[];
  images: string[];
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  createdAt: string;
  updatedAt: string;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
  agentId?: string; // Added to link properties directly to agents
}
