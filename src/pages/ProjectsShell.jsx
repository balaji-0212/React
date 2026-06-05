import { Outlet } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function ProjectsShell() {
  return (
    <PageTransition>
      <section className="container-pad py-14">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio across web, data, AI, IoT, and hardware systems"
          description="Search, filter, and explore selected engineering work with detailed project notes."
        />
        <Outlet />
      </section>
    </PageTransition>
  );
}
