// Hardcoded dummy data for the Haven property platform.
// Images are sourced from Unsplash (free to use).

export const properties = [
  {
    id: 1,
    title: 'Sunlit Modern Villa',
    address: '124 Maple Grove, Hampstead, London',
    price: 1450000,
    status: 'For Sale',
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 3850,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Eliza Hartwell',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: 2,
    title: 'Riverside Loft Apartment',
    address: '8 Wharf Lane, Shoreditch, London',
    price: 4200,
    status: 'To Rent',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    sqft: 1180,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Marcus Bell',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: 3,
    title: 'Georgian Townhouse',
    address: '52 Cresent Row, Bath, Somerset',
    price: 985000,
    status: 'For Sale',
    type: 'Townhouse',
    beds: 4,
    baths: 3,
    sqft: 2640,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Priya Nair',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: 4,
    title: 'Coastal Glass Retreat',
    address: '3 Cliff Edge, St Ives, Cornwall',
    price: 2150000,
    status: 'Luxury',
    type: 'House',
    beds: 6,
    baths: 5,
    sqft: 4720,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Theo Calloway',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: 5,
    title: 'New Build Garden Flat',
    address: '17 Orchard Mews, Islington, London',
    price: 2950,
    status: 'New Build',
    type: 'Apartment',
    beds: 1,
    baths: 1,
    sqft: 720,
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Sofia Almeida',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: 6,
    title: 'Countryside Manor House',
    address: 'Briarwood Estate, Cotswolds, Gloucestershire',
    price: 3650000,
    status: 'Luxury',
    type: 'Manor',
    beds: 8,
    baths: 6,
    sqft: 7200,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    agent: {
      name: 'Eliza Hartwell',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  },
]

// Compact list used by the Browse by Area "List View" (8 entries).
// Each marker also carries x/y percentage coordinates for the CSS map.
export const areaListings = [
  { id: 'a1', name: 'Hampstead Heath View', area: 'Hampstead', price: 1450000, status: 'For Sale', beds: 5, x: 28, y: 32 },
  { id: 'a2', name: 'Shoreditch Wharf Loft', area: 'Shoreditch', price: 4200, status: 'To Rent', beds: 2, x: 58, y: 24 },
  { id: 'a3', name: 'Bath Crescent House', area: 'Bath', price: 985000, status: 'For Sale', beds: 4, x: 42, y: 56 },
  { id: 'a4', name: 'St Ives Cliff Retreat', area: 'Cornwall', price: 2150000, status: 'Luxury', beds: 6, x: 18, y: 70 },
  { id: 'a5', name: 'Islington Garden Flat', area: 'Islington', price: 2950, status: 'New Build', beds: 1, x: 66, y: 44 },
  { id: 'a6', name: 'Cotswolds Manor', area: 'Gloucestershire', price: 3650000, status: 'Luxury', beds: 8, x: 50, y: 38 },
  { id: 'a7', name: 'Greenwich Park Terrace', area: 'Greenwich', price: 720000, status: 'For Sale', beds: 3, x: 78, y: 62 },
  { id: 'a8', name: 'Camden Canal Studio', area: 'Camden', price: 1850, status: 'To Rent', beds: 1, x: 36, y: 80 },
]

export const agents = [
  {
    id: 1,
    name: 'Eliza Hartwell',
    specialty: 'Luxury & Period Homes',
    listings: 42,
    rating: 4.9,
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Marcus Bell',
    specialty: 'City Rentals',
    listings: 31,
    rating: 4.8,
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Priya Nair',
    specialty: 'New Developments',
    listings: 28,
    rating: 5.0,
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Theo Calloway',
    specialty: 'Coastal & Rural',
    listings: 37,
    rating: 4.7,
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
]

export const stats = [
  { value: '14,200', label: 'Active Listings' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '28 Days', label: 'Avg Time to Sell' },
]
