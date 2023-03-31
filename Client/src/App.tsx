import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';
import Transactions from './pages/Transactions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Connexion from './pages/Connexion';

function App() {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <Routes>
        <Route path="/dashboard" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Dashboard />
          </div>
        } />
        <Route path="/analytics" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Analytics />
          </div>
        } />
        <Route path="/categories" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Categories />
          </div>
        } />
        <Route path="/transactions" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Transactions />
          </div>
        } />
        <Route path="/subscription" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Subscription />
          </div>
        } />
        <Route path="/profile" element={
          <div id='grids'>
            <Header />
            <Sidebar />
            <Profile />
          </div>
        } />
        <Route path="/Connexion" element={<Connexion />} />
      </Routes>
    </>
  );
}

export default App;
