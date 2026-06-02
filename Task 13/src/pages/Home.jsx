import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

function Home() {
  return (
    <main className="page-main home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Software Engineer</span>
          <h1>Balaji Sivakumar</h1>
          <p>
            Detail-oriented software engineer from Coimbatore with hands-on
            experience in Python, SQL, data analytics, and building reliable,
            maintainable software solutions.
          </p>
          <Link className="primary-action" to="/users?page=1">
            <Search size={19} aria-hidden="true" />
            View Users
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-preview" aria-hidden="true">
          <span>Python & SQL</span>
          <span>Data Analytics</span>
          <span>Power BI & Excel</span>
          <span>GitHub Actions & AWS</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
