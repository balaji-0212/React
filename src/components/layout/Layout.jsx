import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-hidden text-ink dark:text-slate-100">
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-50 -translate-y-20 rounded bg-ocean px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="pt-20" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
