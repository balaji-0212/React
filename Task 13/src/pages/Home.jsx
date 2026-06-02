import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

function Home() {
  return (
    <main className="page-main home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">React Router DOM</span>
          <h1>Pagination using useSearchParams</h1>
          <p>
            This project demonstrates pagination using React Router DOM and
            useSearchParams.
          </p>
          <Link className="primary-action" to="/users?page=1">
            <Search size={19} aria-hidden="true" />
            Go To Users
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-preview" aria-hidden="true">
          <span>page=1</span>
          <span>page=2</span>
          <span>page=3</span>
          <span>page=4</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
