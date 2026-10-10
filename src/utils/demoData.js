// Beverage Images
const bev = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80';
// Chinese Images
const chi = 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80';
// South Indian
const sou = 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80';
// Starters
const sta = 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80';
// North Indian
const nor = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80';
// Desserts
const des = 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80';

export const categories = [
  'Beverages',
  'Chinese',
  'South Indian',
  'Starters',
  'North Indian',
  'Desserts'
];

export const demoMenuItems = [
  // Beverages
  { id: 'b1', name: 'Filter Coffee', description: 'Traditional South Indian filter coffee.', category: 'Beverages', price: 30, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },

  // Chinese
  { id: 'c1', name: 'Veg Fried Rice', description: 'Wok tossed rice with veggies.', category: 'Chinese', price: 120, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },

  // South Indian
  { id: 's1', name: 'Plain Dosa', description: 'Crispy crepe.', category: 'South Indian', price: 50, prepTime: 8, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },

  // Starters
  { id: 'st1', name: 'Paneer Tikka', description: 'Grilled paneer cubes.', category: 'Starters', price: 180, prepTime: 15, workloadUnits: 3, available: true, image: sta, dietary: ['Vegetarian'] },

  // North Indian
  { id: 'n1', name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread.', category: 'North Indian', price: 120, prepTime: 15, workloadUnits: 3, available: true, image: nor, dietary: ['Vegetarian'] },

  // Desserts
  { id: 'd1', name: 'Donut', description: 'Sweet glazed ring.', category: 'Desserts', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
];

export const demoSlots = [
  { time: '12:00 PM', capacity: 10, reserved: 10, status: 'full' },
  { time: '12:15 PM', capacity: 10, reserved: 8, status: 'available' },
  { time: '12:30 PM', capacity: 10, reserved: 2, status: 'available' },
  { time: '12:45 PM', capacity: 10, reserved: 5, status: 'available' },
  { time: '01:00 PM', capacity: 10, reserved: 9, status: 'warning' },
  { time: '01:15 PM', capacity: 10, reserved: 0, status: 'available' },
];

export const demoOrders = [
  { id: 'RW-102', items: [{name: 'Masala Dosa', qty: 2}, {name: 'Cold Coffee', qty: 1}], time: '12:15 PM', status: 'preparing', priority: 'high', waitTime: 10 },
  { id: 'RW-103', items: [{name: 'Veg Fried Rice', qty: 1}], time: '12:30 PM', status: 'pending', priority: 'medium', waitTime: 5 },
  { id: 'RW-104', items: [{name: 'Paneer Sandwich', qty: 2}], time: '12:30 PM', status: 'pending', priority: 'medium', waitTime: 5 },
  { id: 'RW-100', items: [{name: 'Veg Thali', qty: 1}], time: '12:00 PM', status: 'ready', priority: 'low', waitTime: 20 },
];
