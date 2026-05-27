import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Services from './pages/Services.jsx';
import AppDevelopment from './pages/services/AppDevelopment.jsx';
import UIUXDesign from './pages/services/UIUXDesign.jsx';
import WebDevelopment from './pages/services/WebDevelopment.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />}>
          <Route index element={<Navigate to="web-development" replace />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
