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
  },
  {
    id: '7',
    title: 'Contemporary Penthouse with City Skyline View',
    description: 'Experience luxury living at its finest in this stunning penthouse overlooking the city skyline. This exclusive residence features floor-to-ceiling windows, premium finishes, and an open layout perfect for entertaining. Enjoy sunrise to sunset views from your private terrace.',
    price: 1650000,
    type: 'Penthouse',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 3,
    size: 2800,
    yearBuilt: 2019,
    features: ['Private Terrace', 'Floor-to-Ceiling Windows', 'Concierge Service', 'Private Elevator', 'Gourmet Kitchen', 'Smart Home System'],
    images: [
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '789 Skyline Blvd, PH 2',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94133',
      country: 'USA',
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    createdAt: '2023-08-10T09:15:00Z',
    updatedAt: '2023-09-05T14:30:00Z',
    agent: {
      id: 'a7',
      name: 'Jonathan Lee',
      phone: '(415) 555-7890',
      email: 'jonathan@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=59'
    }
  },
  {
    id: '8',
    title: 'Renovated Historic Brownstone',
    description: 'Classic brownstone with modern updates in a historic neighborhood. This charming property combines original architectural details with contemporary amenities. Features include restored hardwood floors, crown molding, updated kitchen and bathrooms, and a private garden.',
    price: 1250000,
    type: 'Townhouse',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3.5,
    size: 2600,
    yearBuilt: 1890,
    features: ['Original Hardwood Floors', 'Crown Molding', 'Fireplace', 'Updated Kitchen', 'Private Garden', 'Central Air'],
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '456 Historic Row',
      city: 'Boston',
      state: 'MA',
      zipCode: '02108',
      country: 'USA',
      coordinates: {
        lat: 42.3601,
        lng: -71.0589
      }
    },
    createdAt: '2023-09-01T12:15:00Z',
    updatedAt: '2023-09-20T10:45:00Z',
    agent: {
      id: 'a8',
      name: 'Rebecca Thompson',
      phone: '(617) 555-1212',
      email: 'rebecca@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=29'
    }
  },
  {
    id: '9',
    title: 'Mid-Century Modern Masterpiece',
    description: 'Architectural gem featuring the best of mid-century modern design. This stunning home offers an open floor plan, walls of glass, and seamless indoor-outdoor living. The property has been thoughtfully restored while preserving its original character and adding modern conveniences.',
    price: 1400000,
    type: 'House',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    size: 2100,
    yearBuilt: 1958,
    features: ['Floor to Ceiling Windows', 'Original Terrazzo Floors', 'Butterfly Roof', 'Updated Kitchen', 'Zen Garden', 'Carport'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '789 Palm Springs Drive',
      city: 'Palm Springs',
      state: 'CA',
      zipCode: '92264',
      country: 'USA',
      coordinates: {
        lat: 33.8303,
        lng: -116.5453
      }
    },
    createdAt: '2023-10-05T11:20:00Z',
    updatedAt: '2023-10-25T09:10:00Z',
    agent: {
      id: 'a9',
      name: 'Daniel Kim',
      phone: '(760) 555-4321',
      email: 'daniel@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=69'
    }
  },
  {
    id: '10',
    title: 'Waterfront Estate with Private Dock',
    description: 'Spectacular waterfront property with panoramic views and private boat dock. This luxurious estate offers the ultimate in indoor-outdoor living with expansive patios, a pool overlooking the water, and direct access to boating and water activities.',
    price: 4500000,
    type: 'Estate',
    status: 'for-sale',
    bedrooms: 6,
    bathrooms: 7,
    size: 6800,
    yearBuilt: 2012,
    features: ['Private Dock', 'Infinity Pool', 'Outdoor Kitchen', 'Wine Cellar', 'Home Theater', 'Guest House', 'Smart Home System'],
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '123 Coastal Highway',
      city: 'Jupiter',
      state: 'FL',
      zipCode: '33458',
      country: 'USA',
      coordinates: {
        lat: 26.9342,
        lng: -80.0942
      }
    },
    createdAt: '2023-09-15T14:30:00Z',
    updatedAt: '2023-10-10T16:00:00Z',
    agent: {
      id: 'a10',
      name: 'Alexandra Rivera',
      phone: '(561) 555-7890',
      email: 'alexandra@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=45'
    }
  },
  {
    id: '11',
    title: 'Ski-In/Ski-Out Mountain Lodge',
    description: 'Ultimate mountain retreat with direct ski access. This luxurious lodge combines rustic charm with modern amenities, featuring soaring ceilings, a stone fireplace, and expansive windows that frame spectacular mountain views. Perfect for year-round enjoyment with skiing in winter and hiking in summer.',
    price: 3250000,
    type: 'Lodge',
    status: 'for-sale',
    bedrooms: 5,
    bathrooms: 4,
    size: 4500,
    yearBuilt: 2017,
    features: ['Ski-In/Ski-Out Access', 'Hot Tub', 'Stone Fireplace', 'Heated Floors', 'Boot Warming Room', 'Game Room', 'Panoramic Views'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1601918774946-25832a4be0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '45 Alpine Way',
      city: 'Park City',
      state: 'UT',
      zipCode: '84060',
      country: 'USA',
      coordinates: {
        lat: 40.6461,
        lng: -111.4980
      }
    },
    createdAt: '2023-10-20T08:00:00Z',
    updatedAt: '2023-11-05T13:15:00Z',
    agent: {
      id: 'a11',
      name: 'Marcus Peterson',
      phone: '(435) 555-3456',
      email: 'marcus@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=53'
    }
  },
  {
    id: '12',
    title: 'Urban Smart Home with Rooftop Garden',
    description: 'Modern smart home in a trendy urban neighborhood. This tech-forward residence features integrated home automation, energy-efficient systems, and contemporary design. The private rooftop garden offers a peaceful retreat with city views and sustainable landscaping.',
    price: 925000,
    type: 'Townhouse',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1800,
    yearBuilt: 2021,
    features: ['Smart Home Technology', 'Rooftop Garden', 'Solar Panels', 'EV Charging Station', 'Energy Efficient', 'Home Office'],
    images: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1595514535416-b351a1ac5241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '789 Innovation Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '78704',
      country: 'USA',
      coordinates: {
        lat: 30.2672,
        lng: -97.7431
      }
    },
    createdAt: '2023-11-10T10:45:00Z',
    updatedAt: '2023-11-25T14:30:00Z',
    agent: {
      id: 'a12',
      name: 'Sophia Garcia',
      phone: '(512) 555-6789',
      email: 'sophia@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=31'
    }
  },
  {
    id: '13',
    title: 'Countryside Farmhouse with Acreage',
    description: 'Charming renovated farmhouse on 15 acres of picturesque land. This property offers the perfect blend of historic character and modern updates, featuring a renovated kitchen, spacious rooms with original details, a wraparound porch, and various outbuildings ideal for agricultural or recreational use.',
    price: 895000,
    type: 'Farmhouse',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3,
    size: 3200,
    yearBuilt: 1925,
    features: ['15 Acres', 'Wraparound Porch', 'Barn', 'Renovated Kitchen', 'Original Hardwood Floors', 'Pastoral Views'],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1585129777188-95ce18e3c366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '234 Rural Route',
      city: 'Hudson Valley',
      state: 'NY',
      zipCode: '12534',
      country: 'USA',
      coordinates: {
        lat: 42.2526,
        lng: -73.7913
      }
    },
    createdAt: '2023-12-01T09:30:00Z',
    updatedAt: '2023-12-15T11:00:00Z',
    agent: {
      id: 'a13',
      name: 'Benjamin Walker',
      phone: '(845) 555-3210',
      email: 'benjamin@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=63'
    }
  },
  {
    id: '14',
    title: 'Golf Course Home with Resort Amenities',
    description: 'Elegant residence overlooking a championship golf course in a prestigious gated community. This luxury home features an open floor plan, gourmet kitchen, and spacious outdoor living area perfect for entertaining. Community amenities include golf, tennis, swimming, and a clubhouse.',
    price: 1750000,
    type: 'House',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3800,
    yearBuilt: 2016,
    features: ['Golf Course View', 'Pool', 'Outdoor Kitchen', 'Home Automation', 'Club Membership', 'Three-Car Garage'],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600047508788-26bb381ead0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '123 Fairway Drive',
      city: 'Scottsdale',
      state: 'AZ',
      zipCode: '85255',
      country: 'USA',
      coordinates: {
        lat: 33.6910,
        lng: -111.8910
      }
    },
    createdAt: '2024-01-05T13:45:00Z',
    updatedAt: '2024-01-20T16:30:00Z',
    agent: {
      id: 'a14',
      name: 'Victoria Reynolds',
      phone: '(480) 555-8765',
      email: 'victoria@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=37'
    }
  },
  {
    id: '15',
    title: 'Desert Contemporary with Mountain Views',
    description: 'Sleek contemporary home surrounded by stunning desert landscapes and mountain views. This architectural gem features walls of glass, a seamless indoor-outdoor flow, and a resort-style backyard with pool and spa. The design harmoniously integrates with the natural surroundings.',
    price: 1950000,
    type: 'House',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 3.5,
    size: 3100,
    yearBuilt: 2020,
    features: ['Mountain Views', 'Pool & Spa', 'Outdoor Fireplace', 'Great Room', 'Chef\'s Kitchen', 'Energy Efficient'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '789 Desert View Road',
      city: 'Tucson',
      state: 'AZ',
      zipCode: '85718',
      country: 'USA',
      coordinates: {
        lat: 32.2540,
        lng: -110.9742
      }
    },
    createdAt: '2024-02-10T10:15:00Z',
    updatedAt: '2024-02-28T12:45:00Z',
    agent: {
      id: 'a15',
      name: 'Nathan Park',
      phone: '(520) 555-9876',
      email: 'nathan@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=57'
    }
  },
  {
    id: '16',
    title: 'Lakefront Cottage with Private Dock',
    description: 'Charming lakefront cottage perfect for year-round enjoyment or vacation getaway. This idyllic property features panoramic water views, a private dock, and beautifully landscaped grounds. The cozy interior offers an open layout with rustic touches and modern comforts.',
    price: 750000,
    type: 'Cottage',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    size: 1600,
    yearBuilt: 2008,
    features: ['Lakefront', 'Private Dock', 'Stone Fireplace', 'Screened Porch', 'Open Floor Plan', 'Guest Quarters'],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    ],
    location: {
      address: '456 Lakeshore Drive',
      city: 'Lake Geneva',
      state: 'WI',
      zipCode: '53147',
      country: 'USA',
      coordinates: {
        lat: 42.5916,
        lng: -88.4334
      }
    },
    createdAt: '2024-03-01T11:30:00Z',
    updatedAt: '2024-03-15T13:00:00Z',
    agent: {
      id: 'a16',
      name: 'Olivia Bennett',
      phone: '(262) 555-4321',
      email: 'olivia@realestatepro.com',
      avatar: 'https://i.pravatar.cc/150?img=41'
    }
  }
];
