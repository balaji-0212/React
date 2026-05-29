import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import UserDetails from './pages/UserDetails.jsx';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
