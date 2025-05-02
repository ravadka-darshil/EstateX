
import { PropertyType } from '@/types/property';

export const properties: PropertyType[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    description: 'Experience luxury living with this stunning villa overlooking the Pacific Ocean. This modern masterpiece features high ceilings, walls of glass, and an open floor plan perfect for entertaining. Enjoy spectacular sunsets from your infinity pool and expansive terrace.',
    price: 2500000,
    type: 'Villa',
    status: 'for-sale',
    bedrooms: 5,
    bathrooms: 4.5,
    size: 4200,
    yearBuilt: 2018,
    features: ['Swimming Pool', 'Ocean View', 'Smart Home System', 'Wine Cellar', 'Home Theater', 'Chef\'s Kitchen', 'Garage for 3 cars'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '123 Ocean Drive',
      city: 'Malibu',
      state: 'CA',
      zipCode: '90210',
      country: 'USA',
      coordinates: {
        lat: 34.0259,
        lng: -118.7798
      }
    },
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2023-02-01T14:45:00Z',
    agent: {
      id: 'a1',
      name: 'Michael Johnson',
      phone: '(310) 555-1234',
      email: 'michael@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=52'
    }
  },
  {
    id: '2',
    title: 'Modern Downtown Apartment',
    description: 'Sleek and sophisticated apartment in the heart of downtown. This contemporary residence features floor-to-ceiling windows that flood the space with natural light and offer stunning city views. The open concept design, premium finishes, and smart home technology create the perfect urban retreat.',
    price: 850000,
    type: 'Apartment',
    status: 'for-sale',
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    yearBuilt: 2020,
    features: ['Doorman', 'Gym', 'Rooftop Terrace', 'City Views', 'Smart Home Features', 'Pet Friendly'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '456 Main Street, Unit 2001',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA',
      coordinates: {
        lat: 47.6062,
        lng: -122.3321
      }
    },
    createdAt: '2023-03-05T09:15:00Z',
    updatedAt: '2023-03-20T11:30:00Z',
    agent: {
      id: 'a2',
      name: 'Sarah Williams',
      phone: '(206) 555-5678',
      email: 'sarah@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=25'
    }
  },
  {
    id: '3',
    title: 'Charming Suburban Family Home',
    description: 'Welcome to this beautifully updated family home in a sought-after neighborhood. Featuring a spacious layout with an updated kitchen, hardwood floors, and a large backyard perfect for family gatherings. The finished basement provides additional living space for a home office or recreation room.',
    price: 675000,
    type: 'House',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    yearBuilt: 2005,
    features: ['Fireplace', 'Finished Basement', 'Hardwood Floors', 'Patio', 'Large Backyard', 'Garage for 2 cars'],
    images: [
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1574118141758-83be7de26f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '789 Oak Avenue',
      city: 'Arlington',
      state: 'VA',
      zipCode: '22207',
      country: 'USA',
      coordinates: {
        lat: 38.8816,
        lng: -77.0910
      }
    },
    createdAt: '2023-04-10T14:20:00Z',
    updatedAt: '2023-04-25T16:45:00Z',
    agent: {
      id: 'a3',
      name: 'David Chen',
      phone: '(703) 555-9012',
      email: 'david@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=68'
    }
  },
  {
    id: '4',
    title: 'Rustic Mountain Retreat',
    description: 'Escape to this serene mountain retreat featuring breathtaking views and luxury finishes. This stunning property combines rustic charm with modern amenities, including vaulted ceilings with exposed beams, a stone fireplace, and large windows that frame the majestic mountain landscape.',
    price: 1150000,
    type: 'Cabin',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    size: 2200,
    yearBuilt: 2015,
    features: ['Mountain Views', 'Stone Fireplace', 'Wrap-around Deck', 'Hot Tub', 'Hiking Trails', 'Wood Stove'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '321 Pine Trail',
      city: 'Aspen',
      state: 'CO',
      zipCode: '81611',
      country: 'USA',
      coordinates: {
        lat: 39.1911,
        lng: -106.8175
      }
    },
    createdAt: '2023-05-18T08:45:00Z',
    updatedAt: '2023-06-02T10:30:00Z',
    agent: {
      id: 'a4',
      name: 'Emma Rodriguez',
      phone: '(970) 555-3456',
      email: 'emma@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=32'
    }
  },
  {
    id: '5',
    title: 'Urban Loft in Historic Building',
    description: 'Stylish urban loft in a converted historic building with original architectural details. This unique space features exposed brick walls, soaring ceilings, large industrial windows, and an open floor plan perfect for modern living. Located in a vibrant neighborhood with easy access to restaurants, shops, and public transportation.',
    price: 565000,
    type: 'Loft',
    status: 'for-sale',
    bedrooms: 1,
    bathrooms: 1.5,
    size: 950,
    yearBuilt: 1920,
    features: ['Exposed Brick', 'High Ceilings', 'Industrial Windows', 'Stainless Steel Appliances', 'Concrete Floors', 'Building Security'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1538430989507-797d5e4ba836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '101 Warehouse District',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60607',
      country: 'USA',
      coordinates: {
        lat: 41.8781,
        lng: -87.6298
      }
    },
    createdAt: '2023-06-20T11:00:00Z',
    updatedAt: '2023-07-05T13:15:00Z',
    agent: {
      id: 'a5',
      name: 'James Wilson',
      phone: '(312) 555-7890',
      email: 'james@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=42'
    }
  },
  {
    id: '6',
    title: 'Beachfront Paradise Home',
    description: 'Live your dream in this beachfront paradise with direct access to pristine sandy beaches. This coastal gem offers an open floor plan with large windows that capture spectacular ocean views and abundant natural light. The spacious deck is perfect for entertaining or simply relaxing to the sound of waves.',
    price: 1875000,
    type: 'House',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3.5,
    size: 3100,
    yearBuilt: 2010,
    features: ['Direct Beach Access', 'Ocean Views', 'Outdoor Shower', 'Deck', 'Open Floor Plan', 'Hurricane Windows'],
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '567 Shoreline Drive',
      city: 'Naples',
      state: 'FL',
      zipCode: '34102',
      country: 'USA',
      coordinates: {
        lat: 26.1420,
        lng: -81.7948
      }
    },
    createdAt: '2023-07-15T15:30:00Z',
    updatedAt: '2023-08-02T17:45:00Z',
    agent: {
      id: 'a6',
      name: 'Olivia Martinez',
      phone: '(239) 555-2345',
      email: 'olivia@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=23'
    }
  }
];
