import { Service, Store, FranchiseModel, Testimonial, FAQ, DryWashItem } from '../types';

export const dryWashItems: DryWashItem[] = [
  { id: 'dw1', name: 'Normal Saree', price: 148 },
  { id: 'dw2', name: 'Pattu Saree', price: 248 },
  { id: 'dw3', name: 'Blouse', price: 238 },
  { id: 'dw4', name: 'Blazer', price: 58 },
  { id: 'dw5', name: 'Kurta', price: 78 },
  { id: 'dw6', name: 'Pyjama', price: 80 },
  { id: 'dw7', name: 'T-shirt', price: 148 },
  { id: 'dw8', name: 'Hoodie', price: 78 },
  { id: 'dw9', name: 'Waist Coat', price: 80 },
  { id: 'dw10', name: 'Pancha', price: 148 },
  { id: 'dw11', name: 'Kanduva', price: 248 },
  { id: 'dw12', name: 'Top', price: 298 },
  { id: 'dw13', name: 'Lehenga Bottom', price: 80 },
  { id: 'dw14', name: 'Lehenga Chunni', price: 80 },
  { id: 'dw15', name: 'Lehenga Blouse', price: 98 },
  { id: 'dw16', name: 'Modi Coat', price: 148 },
  { id: 'dw17', name: 'Other', price: 80 }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Wash & Fold',
    description: 'Professional washing and folding service for your everyday laundry',
    pricePerUnit: 88,
    unit: 'kg',
    icon: 'package'
  },
  {
    id: '2',
    name: 'Steam Iron',
    description: 'Crisp and wrinkle-free ironing service',
    pricePerUnit: 98,
    unit: 'kg',
    icon: 'flame'
  },
  {
    id: '3',
    name: 'Wash & Iron',
    description: 'Complete wash and iron service for perfect results',
    pricePerUnit: 118,
    unit: 'kg',
    icon: 'sparkles'
  },
  {
    id: '4',
    name: 'Dry Wash',
    description: 'Premium dry cleaning for delicate garments',
    pricePerUnit: 80,
    unit: 'piece',
    icon: 'droplet',
    startingPrice: true
  }
];

export const stores: Store[] = [
  {
    id: '1',
    name: 'Laundry Book Miyapur',
    address: 'Maktha Masjid, HMT Colony, Miyapur',
    city: 'Hyderabad',
    state: 'Telangana',
    hours: 'Mon-Sun: 8AM-9PM',
    services: ['Wash & Fold', 'Steam Iron', 'Wash & Iron', 'Dry Wash'],
    lat: 17.4969,
    lng: 78.3821
  }
];

export const franchiseModels: FranchiseModel[] = [
  {
    id: '1',
    name: 'Retail Outlet',
    investment: '₹15-20 Lakhs',
    space: '500-800 sq ft',
    description: 'Full-service retail outlet with complete laundry facilities'
  },
  {
    id: '2',
    name: 'Micro/Hub',
    investment: '₹8-12 Lakhs',
    space: '300-500 sq ft',
    description: 'Compact hub for collection and delivery operations'
  },
  {
    id: '3',
    name: 'Full Studio',
    investment: '₹25-35 Lakhs',
    space: '1000-1500 sq ft',
    description: 'Premium studio with advanced equipment and multiple service lines'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    content: 'Running this franchise has been incredibly rewarding. The training and support from Laundry Book made the setup seamless.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mumbai',
    content: 'Within 18 months, I recovered my investment. The CRM system and operational support are top-notch.',
    rating: 5
  },
  {
    id: '3',
    name: 'Anil Patel',
    location: 'Pune',
    content: 'Best business decision I made. The brand reputation brings in customers, and the processes are very efficient.',
    rating: 5
  }
];

export const homeFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What are your service rates?',
    answer: 'Our rates vary by service type. Wash & Fold starts at ₹40/kg, Steam Iron at ₹15/piece, Wash & Iron at ₹50/kg, and Dry Wash at ₹80/piece.'
  },
  {
    id: '2',
    question: 'How do I schedule a pickup?',
    answer: 'You can schedule a pickup through our website by selecting your preferred time slot and location, or download our mobile app for easier booking.'
  },
  {
    id: '3',
    question: 'What is your turnaround time?',
    answer: 'Standard service has a 24-48 hour turnaround. Express service is available for same-day or next-day delivery.'
  },
  {
    id: '4',
    question: 'Do you offer pickup and delivery?',
    answer: 'Yes! We offer free pickup and delivery within our service areas. Simply schedule your pickup online or through the app.'
  }
];

export const franchiseFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What is the total investment required?',
    answer: 'Investment varies by model: Micro/Hub (₹8-12L), Retail Outlet (₹15-20L), and Full Studio (₹25-35L). This includes franchise fee, equipment, and setup costs.'
  },
  {
    id: '2',
    question: 'What is the expected payback period?',
    answer: 'Most franchisees achieve break-even within 12-18 months, depending on location and operational efficiency.'
  },
  {
    id: '3',
    question: 'What support do you provide?',
    answer: 'We provide comprehensive training, site selection assistance, setup support, marketing materials, CRM access, and ongoing operational guidance.'
  },
  {
    id: '4',
    question: 'Do I need prior laundry experience?',
    answer: 'No prior experience is required. We provide complete training on operations, equipment handling, customer service, and business management.'
  },
  {
    id: '5',
    question: 'What are the space requirements?',
    answer: 'Space requirements vary: Micro/Hub (300-500 sq ft), Retail Outlet (500-800 sq ft), Full Studio (1000-1500 sq ft).'
  }
];

export const timeSlots = [
  '8:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM'
];
