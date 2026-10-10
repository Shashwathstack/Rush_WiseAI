import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { CustomerLayout } from './components/layout/CustomerLayout';
import { KitchenLayout } from './components/layout/KitchenLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Customer Pages
import { LandingPage } from './pages/customer/LandingPage';
import { MenuPage } from './pages/customer/MenuPage';
import { CheckoutPage } from './pages/customer/CheckoutPage';
import { OrderConfirmationPage } from './pages/customer/OrderConfirmationPage';
import { TrackOrderPage } from './pages/customer/TrackOrderPage';

// Kitchen Pages
import { KitchenDashboard } from './pages/kitchen/KitchenDashboard';
import { KitchenQueue } from './pages/kitchen/KitchenQueue';
import { KitchenCapacity } from './pages/kitchen/KitchenCapacity';
import { KitchenBatchPrep } from './pages/kitchen/KitchenBatchPrep';

// Admin Pages
import { AdminOverview } from './pages/admin/AdminOverview';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';
import { AdminMenu } from './pages/admin/AdminMenu';
import { AdminSlots } from './pages/admin/AdminSlots';
import { AdminDemandPulse } from './pages/admin/AdminDemandPulse';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminStaff } from './pages/admin/AdminStaff';

// Auth
import { StaffLogin } from './pages/auth/StaffLogin';

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
            <Route path="orders" element={<KitchenQueue />} />
            <Route path="queue" element={<KitchenQueue />} />
            <Route path="capacity" element={<KitchenCapacity />} />
            <Route path="batch-prep" element={<KitchenBatchPrep />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="orders" element={<KitchenQueue />} /> {/* Reusing queue UI for orders view */}
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="pickup-slots" element={<AdminSlots />} />
            <Route path="demand-pulse" element={<AdminDemandPulse />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="staff" element={<AdminStaff />} />
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
