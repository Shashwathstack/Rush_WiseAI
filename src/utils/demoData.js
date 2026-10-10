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
  { id: 'b2', name: 'Masala Tea', description: 'Spiced Indian tea.', category: 'Beverages', price: 20, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b3', name: 'Ginger Tea', description: 'Refreshing tea with fresh ginger.', category: 'Beverages', price: 20, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b4', name: 'Cold Coffee', description: 'Creamy iced coffee.', category: 'Beverages', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b5', name: 'Iced Tea', description: 'Lemon iced tea.', category: 'Beverages', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegan'] },
  { id: 'b6', name: 'Fresh Lime Soda', description: 'Sweet or salted lime soda.', category: 'Beverages', price: 40, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegan'] },
  { id: 'b7', name: 'Lemon Juice', description: 'Fresh squeezed lemon juice.', category: 'Beverages', price: 30, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegan'] },
  { id: 'b8', name: 'Mango Lassi', description: 'Yogurt based mango drink.', category: 'Beverages', price: 70, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b9', name: 'Sweet Lassi', description: 'Sweetened yogurt drink.', category: 'Beverages', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b10', name: 'Buttermilk', description: 'Spiced watery yogurt.', category: 'Beverages', price: 30, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b11', name: 'Badam Milk', description: 'Almond flavored milk.', category: 'Beverages', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },
  { id: 'b12', name: 'Hot Chocolate', description: 'Rich hot chocolate.', category: 'Beverages', price: 80, prepTime: 5, workloadUnits: 1, available: true, image: bev, dietary: ['Vegetarian'] },

  // Chinese
  { id: 'c1', name: 'Veg Fried Rice', description: 'Wok tossed rice with veggies.', category: 'Chinese', price: 120, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c2', name: 'Schezwan Fried Rice', description: 'Spicy fried rice.', category: 'Chinese', price: 130, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c3', name: 'Paneer Fried Rice', description: 'Fried rice with paneer cubes.', category: 'Chinese', price: 150, prepTime: 12, workloadUnits: 2, available: true, image: chi, dietary: ['Vegetarian'] },
  { id: 'c4', name: 'Veg Hakka Noodles', description: 'Stir fried noodles.', category: 'Chinese', price: 120, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c5', name: 'Schezwan Noodles', description: 'Spicy stir fried noodles.', category: 'Chinese', price: 130, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c6', name: 'Chilli Garlic Noodles', description: 'Noodles with garlic and chilli.', category: 'Chinese', price: 140, prepTime: 12, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c7', name: 'Veg Manchurian', description: 'Veg balls in dark soy sauce.', category: 'Chinese', price: 130, prepTime: 15, workloadUnits: 3, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c8', name: 'Gobi Manchurian', description: 'Cauliflower in manchurian sauce.', category: 'Chinese', price: 130, prepTime: 15, workloadUnits: 3, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c9', name: 'Chilli Paneer', description: 'Spicy paneer chunks.', category: 'Chinese', price: 160, prepTime: 15, workloadUnits: 3, available: true, image: chi, dietary: ['Vegetarian'] },
  { id: 'c10', name: 'Spring Rolls', description: 'Crispy fried rolls.', category: 'Chinese', price: 110, prepTime: 10, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c11', name: 'Chilli Mushroom', description: 'Spicy tossed mushrooms.', category: 'Chinese', price: 150, prepTime: 12, workloadUnits: 3, available: true, image: chi, dietary: ['Vegan'] },
  { id: 'c12', name: 'Veg Momos', description: 'Steamed dumplings.', category: 'Chinese', price: 100, prepTime: 15, workloadUnits: 2, available: true, image: chi, dietary: ['Vegan'] },

  // South Indian
  { id: 's1', name: 'Plain Dosa', description: 'Crispy crepe.', category: 'South Indian', price: 50, prepTime: 8, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's2', name: 'Masala Dosa', description: 'Potato stuffed crepe.', category: 'South Indian', price: 70, prepTime: 10, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's3', name: 'Mysore Masala Dosa', description: 'Spicy red chutney smeared dosa.', category: 'South Indian', price: 90, prepTime: 10, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's4', name: 'Rava Dosa', description: 'Semolina crepe.', category: 'South Indian', price: 80, prepTime: 12, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's5', name: 'Onion Uttapam', description: 'Thick pancake with onions.', category: 'South Indian', price: 80, prepTime: 12, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's6', name: 'Idli', description: 'Steamed rice cakes (2 pcs).', category: 'South Indian', price: 40, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's7', name: 'Medu Vada', description: 'Fried lentil donuts (2 pcs).', category: 'South Indian', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's8', name: 'Pongal', description: 'Rice and lentil porridge.', category: 'South Indian', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegetarian'] },
  { id: 's9', name: 'Upma', description: 'Savory semolina.', category: 'South Indian', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's10', name: 'Pesarattu', description: 'Green gram dosa.', category: 'South Indian', price: 80, prepTime: 10, workloadUnits: 2, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's11', name: 'Lemon Rice', description: 'Tangy lemon flavored rice.', category: 'South Indian', price: 70, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegan'] },
  { id: 's12', name: 'Curd Rice', description: 'Yogurt rice.', category: 'South Indian', price: 70, prepTime: 5, workloadUnits: 1, available: true, image: sou, dietary: ['Vegetarian'] },

  // Starters
  { id: 'st1', name: 'Paneer Tikka', description: 'Grilled paneer cubes.', category: 'Starters', price: 180, prepTime: 15, workloadUnits: 3, available: true, image: sta, dietary: ['Vegetarian'] },
  { id: 'st2', name: 'Gobi 65', description: 'Spicy fried cauliflower.', category: 'Starters', price: 140, prepTime: 12, workloadUnits: 3, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st3', name: 'Paneer 65', description: 'Spicy fried paneer.', category: 'Starters', price: 170, prepTime: 12, workloadUnits: 3, available: true, image: sta, dietary: ['Vegetarian'] },
  { id: 'st4', name: 'Crispy Corn', description: 'Fried corn kernels.', category: 'Starters', price: 130, prepTime: 10, workloadUnits: 2, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st5', name: 'Veg Cutlet', description: 'Fried veg patties.', category: 'Starters', price: 100, prepTime: 10, workloadUnits: 2, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st6', name: 'Hara Bhara Kebab', description: 'Spinach and peas patties.', category: 'Starters', price: 150, prepTime: 12, workloadUnits: 2, available: true, image: sta, dietary: ['Vegetarian'] },
  { id: 'st7', name: 'Mushroom Pepper Fry', description: 'Peppery mushrooms.', category: 'Starters', price: 160, prepTime: 12, workloadUnits: 3, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st8', name: 'Baby Corn Manchurian', description: 'Saucy baby corn.', category: 'Starters', price: 150, prepTime: 15, workloadUnits: 3, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st9', name: 'Aloo Tikki', description: 'Potato patties.', category: 'Starters', price: 90, prepTime: 10, workloadUnits: 2, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st10', name: 'Samosa', description: 'Fried pastry with potato filling.', category: 'Starters', price: 40, prepTime: 5, workloadUnits: 1, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st11', name: 'Chilli Baby Corn', description: 'Spicy tossed baby corn.', category: 'Starters', price: 150, prepTime: 12, workloadUnits: 3, available: true, image: sta, dietary: ['Vegan'] },
  { id: 'st12', name: 'Veg Spring Rolls', description: 'Mixed veg fried rolls.', category: 'Starters', price: 120, prepTime: 10, workloadUnits: 2, available: true, image: sta, dietary: ['Vegan'] },

  // North Indian
  { id: 'n1', name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread.', category: 'North Indian', price: 120, prepTime: 15, workloadUnits: 3, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n2', name: 'Rajma Rice', description: 'Kidney beans curry with rice.', category: 'North Indian', price: 110, prepTime: 10, workloadUnits: 2, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n3', name: 'Dal Tadka', description: 'Tempered yellow lentils.', category: 'North Indian', price: 130, prepTime: 10, workloadUnits: 2, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n4', name: 'Paneer Butter Masala', description: 'Paneer in rich tomato gravy.', category: 'North Indian', price: 180, prepTime: 15, workloadUnits: 3, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n5', name: 'Shahi Paneer', description: 'Paneer in creamy cashew gravy.', category: 'North Indian', price: 190, prepTime: 15, workloadUnits: 3, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n6', name: 'Palak Paneer', description: 'Paneer in spinach gravy.', category: 'North Indian', price: 170, prepTime: 15, workloadUnits: 3, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n7', name: 'Aloo Paratha', description: 'Stuffed potato flatbread.', category: 'North Indian', price: 80, prepTime: 10, workloadUnits: 2, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n8', name: 'Paneer Paratha', description: 'Stuffed paneer flatbread.', category: 'North Indian', price: 100, prepTime: 12, workloadUnits: 2, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n9', name: 'Veg Pulao', description: 'Spiced rice with veggies.', category: 'North Indian', price: 130, prepTime: 15, workloadUnits: 2, available: true, image: nor, dietary: ['Vegan'] },
  { id: 'n10', name: 'Jeera Rice', description: 'Cumin flavored rice.', category: 'North Indian', price: 100, prepTime: 10, workloadUnits: 2, available: true, image: nor, dietary: ['Vegan'] },
  { id: 'n11', name: 'Roti with Curry', description: '2 Rotis with seasonal veg curry.', category: 'North Indian', price: 90, prepTime: 10, workloadUnits: 2, available: true, image: nor, dietary: ['Vegetarian'] },
  { id: 'n12', name: 'Veg Thali', description: 'Assorted meal platter.', category: 'North Indian', price: 180, prepTime: 15, workloadUnits: 4, available: true, image: nor, dietary: ['Vegetarian'] },

  // Desserts
  { id: 'd1', name: 'Gulab Jamun', description: 'Fried dough balls in syrup.', category: 'Desserts', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd2', name: 'Rasgulla', description: 'Spongy cheese balls in syrup.', category: 'Desserts', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd3', name: 'Gajar Halwa', description: 'Sweet carrot pudding.', category: 'Desserts', price: 70, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd4', name: 'Kheer', description: 'Rice pudding.', category: 'Desserts', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd5', name: 'Rasmalai', description: 'Cheese discs in sweet milk.', category: 'Desserts', price: 80, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd6', name: 'Kulfi', description: 'Traditional Indian ice cream.', category: 'Desserts', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd7', name: 'Vanilla Ice Cream', description: 'Classic vanilla.', category: 'Desserts', price: 50, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd8', name: 'Chocolate Ice Cream', description: 'Rich chocolate.', category: 'Desserts', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd9', name: 'Brownie', description: 'Fudgy chocolate brownie.', category: 'Desserts', price: 80, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd10', name: 'Chocolate Lava Cake', description: 'Cake with molten center.', category: 'Desserts', price: 110, prepTime: 8, workloadUnits: 2, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd11', name: 'Fruit Custard', description: 'Mixed fruits in custard.', category: 'Desserts', price: 70, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
  { id: 'd12', name: 'Payasam', description: 'South Indian sweet pudding.', category: 'Desserts', price: 60, prepTime: 5, workloadUnits: 1, available: true, image: des, dietary: ['Vegetarian'] },
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
