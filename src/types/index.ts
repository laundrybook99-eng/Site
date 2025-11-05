export interface Service {
  id: string;
  name: string;
  description: string;
  pricePerUnit: number;
  unit: 'kg' | 'piece';
  icon: string;
  startingPrice?: boolean;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  hours: string;
  services: string[];
  lat: number;
  lng: number;
  distance?: string;
}

export interface FranchiseModel {
  id: string;
  name: string;
  investment: string;
  space: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface DryWashItem {
  id: string;
  name: string;
  price: number;
}

export interface BookingFormData {
  pickupDay: 'today' | 'tomorrow';
  timeSlot: string;
  services: { [key: string]: number };
  unit: 'piece' | 'kg';
  storeId: string;
  location: {
    state: string;
    city: string;
    area: string;
    landmark: string;
    lat: number;
    lng: number;
  };
}
