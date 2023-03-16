import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
