import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';
import Transactions from './pages/Transactions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
