import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { CustomerLayout } from './components/layout/CustomerLayout';
import { KitchenLayout } from './components/layout/KitchenLayout';
import { AdminLayout } from './components/layout/AdminLayout';

import { LandingPage } from './pages/customer/LandingPage';
import { MenuPage } from './pages/customer/MenuPage';
import { CheckoutPage } from './pages/customer/CheckoutPage';
import { OrderConfirmationPage } from './pages/customer/OrderConfirmationPage';
import { TrackOrderPage } from './pages/customer/TrackOrderPage';
import { KitchenDashboard } from './pages/kitchen/KitchenDashboard';

const KitchenQueue = () => <div style={{ padding: 20 }}><h1>Kitchen Queue</h1></div>;
const CapacityManagement = () => <div style={{ padding: 20 }}><h1>Capacity Management</h1></div>;

import { AdminAnalytics } from './pages/admin/AdminAnalytics';
const AdminMenu = () => <div style={{ padding: 20 }}><h1>Menu Management</h1></div>;
const AdminSettings = () => <div style={{ padding: 20 }}><h1>Settings</h1></div>;

const StaffLogin = () => <div style={{ padding: 20 }}><h1>Staff Login</h1></div>;

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
        {/* Customer Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Route>

        {/* Kitchen Routes */}
        <Route path="/kitchen" element={<KitchenLayout />}>
          <Route index element={<KitchenDashboard />} />
          <Route path="queue" element={<KitchenQueue />} />
          <Route path="capacity" element={<CapacityManagement />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/analytics" replace />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/staff/login" element={<StaffLogin />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
