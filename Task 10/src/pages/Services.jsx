import { Outlet } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  {
    title: 'Web Development',
    path: 'web-development',
    description: 'Responsive, accessible web interfaces using React, HTML, CSS, routing, and clean component structure.',
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
        <h1>Nested Routing Showcase</h1>
        <p>
          Select a service to render nested content inside this same page through
          React Router DOM's Outlet component.
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
