import { Outlet } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  {
    title: 'Web Development',
    path: 'web-development',
    description: 'Responsive, accessible web interfaces using React, HTML, CSS, and clean component structure.',
  },
  {
    title: 'App Development',
    path: 'app-development',
    description: 'Maintainable application workflows backed by Python, SQL, APIs, testing practices, and automation.',
  },
  {
    title: 'UI/UX Design',
    path: 'ui-ux-design',
    description: 'Clear interface layouts, dashboard thinking, and user-centered screens for data-heavy products.',
  },
];

function Services() {
  return (
    <section className="page content-page">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>Professional Services</h1>
        <p>
          Explore focused services across web interfaces, application workflows,
          and user-centered digital experiences.
        </p>
      </div>

      <div className="services-layout">
        <div className="service-navigation" aria-label="Service nested routes">
          {services.map((service) => (
            <ServiceCard key={service.path} {...service} />
          ))}
        </div>

        <div className="nested-service-panel">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Services;
