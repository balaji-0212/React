import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function NotFound() {
  return (
    <div className="stack">
      <PageHeader
        eyebrow="Not found"
        title="This page is not available"
        description="Return to the dashboard to continue planning, tracking, and refining your career system."
      />
      <Link className="button" to="/dashboard">
        Go to dashboard
      </Link>
    </div>
  );
}
