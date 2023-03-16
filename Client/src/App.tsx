import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';
import Transactions from './pages/Transactions';


function App() {
  const router = createBrowserRouter([
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/analytics', element: <Analytics /> },
    { path: '/categories', element: <Categories /> },
    { path: '/profile', element: <Profile /> },
    { path: '/subscription', element: <Subscription /> },
    { path: '/transactions', element: <Transactions /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
