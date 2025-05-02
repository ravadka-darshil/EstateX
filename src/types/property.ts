
export interface Location {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PropertyType {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  status: 'for-sale' | 'for-rent' | 'sold' | 'pending';
  bedrooms: number;
  bathrooms: number;
  size: number; // square feet
  yearBuilt: number;
  features: string[];
  images: string[];
  location: Location;
  createdAt: string;
  updatedAt: string;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
}
