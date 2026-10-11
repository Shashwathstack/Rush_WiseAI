# RushWise 🍽️
### Beat the rush. Pick your time.

RushWise is a smart food pre-ordering and pickup scheduling platform designed to reduce waiting time, manage kitchen workloads, and provide customers with a smoother food ordering experience.

Instead of waiting in long queues, customers can browse the menu, place orders in advance, and select convenient pickup slots. Kitchen staff can manage incoming orders, while administrators control menu items, system settings, and operational analytics.

## 🚀 Key Features

### 👤 Customer
- Browse the food menu and view dish details.
- Add food items to the cart.
- Place food orders online.
- Select available pickup time slots.
- View order confirmation and order details.
- Track order status.
- Access a responsive interface with light and dark themes.

### 👨‍🍳 Kitchen Staff
- View incoming and active orders.
- Manage the kitchen order queue.
- Update order preparation and completion status.
- Monitor kitchen workload and pickup capacity.
- Manage orders efficiently during peak hours.

### 🛡️ Admin
- Access a dedicated admin dashboard.
- Add, edit, and manage menu items.
- Manage food prices, descriptions, categories, and images.
- Configure kitchen settings and pickup capacity.
- View operational analytics and order statistics.
- Access protected administrative features.

### ⚡ DemandPulse
DemandPulse is RushWise's capacity-aware pickup scheduling feature. It helps manage pickup slot availability based on kitchen workload and available capacity, helping reduce congestion during busy periods.

## 🛠️ Technology Stack

**Frontend**
- React.js
- Vite
- JavaScript
- Mantine UI
- Custom CSS
- React Router
- Motion
- Lucide React
- Recharts
- Sonner

**Backend**
- Node.js
- Express.js
- REST APIs

**Database and Services**
- Supabase PostgreSQL
- Supabase Authentication
- Supabase Realtime
- Row Level Security (RLS)
- Supabase Storage for menu images

**Development Tools**
- Git and GitHub
- Visual Studio Code
- npm

## 🏗️ System Architecture

The application follows a frontend–backend–database architecture.

1. **Frontend:** Provides the customer ordering interface, kitchen dashboard, and admin dashboard.
2. **Backend:** Handles API requests, order processing, validation, and business rules.
3. **Supabase:** Stores application data and provides authentication, database security, realtime capabilities, and file storage.

## 🗄️ Database Structure

The main database tables are:

| Table | Purpose |
|---|---|
| `profiles` | Stores user profile information and role assignments |
| `menu_items` | Stores food names, descriptions, prices, categories, and image references |
| `pickup_slots` | Stores pickup slot timings and capacity information |
| `orders` | Stores customer orders and overall order status |
| `order_items` | Stores individual food items belonging to each order |
| `order_status_history` | Records changes in order status |
| `kitchen_settings` | Stores kitchen configuration and operational settings |

Database access should be controlled using appropriate Row Level Security policies and role-based permissions.

## 🔐 User Roles

RushWise supports three main roles:

- **Customer:** Browses the menu, places orders, selects pickup slots, and tracks orders.
- **Kitchen Staff:** Views and processes orders and monitors kitchen workload.
- **Admin:** Manages menu items, system settings, and analytics.

Staff and admin users can access the dedicated login page at `/staff/login`. After successful authentication, users are directed to the appropriate dashboard according to their assigned role.

## 📂 Main Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/menu` | Food menu |
| `/checkout` | Checkout and order placement |
| `/order-confirmation/:orderId` | Order confirmation |
| `/track-order` | Order tracking |
| `/staff/login` | Staff and admin login |
| `/kitchen` | Kitchen dashboard |
| `/kitchen/queue` | Kitchen order queue |
| `/kitchen/capacity` | Kitchen capacity management |
| `/admin/analytics` | Admin analytics |
| `/admin/settings` | Admin settings |

Additional routes may be added as the project evolves.

## ⚙️ Installation and Setup

### Prerequisites
- Node.js and npm installed
- Git installed
- A Supabase account
- A local copy of the RushWise repository

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

Replace the repository URL and folder name with your actual values.

### 2. Install dependencies

For the frontend:

```bash
npm install
```

If the backend has a separate `server` directory:

```bash
cd server
npm install
```

Return to the project root before running frontend commands.

### 3. Configure environment variables

Create the appropriate `.env` files based on your project structure.

Example frontend configuration:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key
VITE_API_URL=http://localhost:5000/api
```

Example backend configuration, if the Express server connects to Supabase:

```env
PORT=5000
SUPABASE_URL=your_supabase_project_url
SUPABASE_SECRET_KEY=your_server_side_secret_key
```

Use the actual environment variable names expected by your code. Never commit secret keys, passwords, or private credentials to GitHub. Keep `.env` files out of version control.

### 4. Configure Supabase

1. Create a Supabase project.
2. Create the required database tables.
3. Configure authentication and user roles.
4. Set up Row Level Security policies.
5. Configure storage for menu images if required.
6. Apply the project's database migrations or SQL scripts.
7. Add your Supabase credentials to the appropriate environment files.

### 5. Run the application

Start the frontend from the project root:

```bash
npm run dev
```

If the backend is in a separate `server` directory, open another terminal:

```bash
cd server
npm run dev
```

The backend command assumes that a `dev` script exists in `server/package.json`. Use the script defined in your actual project configuration.

Open the local URL printed by Vite in your terminal to access the application.

## 🔒 Security Considerations

- Protect staff and admin routes with authentication and role checks.
- Enforce database access restrictions through Supabase RLS policies.
- Validate order details and pickup slot availability on the server.
- Prevent pickup slots from exceeding their configured capacity.
- Validate uploaded menu images and restrict unauthorized uploads.
- Keep private credentials and server-side secret keys out of frontend code and public repositories.

## 🎯 Project Objective

RushWise aims to make food ordering faster and kitchen operations more efficient by connecting customer pre-orders, pickup scheduling, and kitchen workload management in one platform.

The project focuses on reducing queues, improving pickup coordination, and helping food service teams handle demand more effectively.

## 🔮 Future Enhancements

- Smarter pickup time recommendations.
- Improved demand forecasting.
- Notifications for order status updates.
- Advanced kitchen workload analytics.
- Enhanced peak-hour capacity management.
- More detailed operational reports.

## 👥 Team

**Project:** RushWise  
**Tagline:** Beat the rush. Pick your time.  
**Developed for:** Hackathon project

Add your team members' names and GitHub profiles here
@Shashwathstack @Varsha71V @Shreyas-blr @Shreepradakvlab
