import { NavLink } from 'react-router-dom';

function ServiceCard({ description, path, title }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? 'service-card active-service' : 'service-card'
      }
    >
      <span className="service-card-label">{title}</span>
      <p>{description}</p>
    </NavLink>
  );
}

export default ServiceCard;
