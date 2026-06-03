import ErrorMessage from '../components/ErrorMessage.jsx';
import Footer from '../components/Footer.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Navbar from '../components/Navbar.jsx';
import UserTable from '../components/UserTable.jsx';
import useFetchData from '../hooks/useFetchData.js';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const indianProfiles = [
  {
    name: 'Aarav Sharma',
    username: 'aarav.sharma',
    email: 'aarav.sharma@navkaartech.in',
    phone: '+91 98765 43210',
    website: 'navkaartech.in',
    role: 'Operations Lead',
    address: {
      street: '12 MG Road',
      suite: 'Level 3',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipcode: '560001',
    },
    company: {
      name: 'Navkaar Tech Solutions',
      catchPhrase: 'Cloud operations and product delivery',
    },
  },
  {
    name: 'Priya Nair',
    username: 'priya.nair',
    email: 'priya.nair@urbanledger.in',
    phone: '+91 98452 76120',
    website: 'urbanledger.in',
    role: 'Finance Manager',
    address: {
      street: '44 Residency Road',
      suite: 'Suite 204',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipcode: '560025',
    },
    company: {
      name: 'Urban Ledger Consulting',
      catchPhrase: 'Accounting, tax, and compliance advisory',
    },
  },
  {
    name: 'Rohan Mehta',
    username: 'rohan.mehta',
    email: 'rohan.mehta@westcoastlabs.in',
    phone: '+91 99870 24581',
    website: 'westcoastlabs.in',
    role: 'Product Analyst',
    address: {
      street: '88 Linking Road',
      suite: 'Office 7B',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipcode: '400050',
    },
    company: {
      name: 'West Coast Labs',
      catchPhrase: 'Consumer analytics and market intelligence',
    },
  },
  {
    name: 'Sneha Iyer',
    username: 'sneha.iyer',
    email: 'sneha.iyer@greenroute.in',
    phone: '+91 89391 54822',
    website: 'greenroute.in',
    role: 'Logistics Coordinator',
    address: {
      street: '27 Anna Salai',
      suite: 'Block A',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipcode: '600002',
    },
    company: {
      name: 'GreenRoute Logistics',
      catchPhrase: 'Reliable urban freight and route planning',
    },
  },
  {
    name: 'Karthik Rao',
    username: 'karthik.rao',
    email: 'karthik.rao@hyderabadworks.in',
    phone: '+91 97013 88456',
    website: 'hyderabadworks.in',
    role: 'Engineering Manager',
    address: {
      street: '16 Hitech City Road',
      suite: 'Tower 2',
      city: 'Hyderabad',
      state: 'Telangana',
      zipcode: '500081',
    },
    company: {
      name: 'Hyderabad Works',
      catchPhrase: 'Enterprise web platforms and managed apps',
    },
  },
  {
    name: 'Ananya Gupta',
    username: 'ananya.gupta',
    email: 'ananya.gupta@delhidesignco.in',
    phone: '+91 98111 64238',
    website: 'delhidesignco.in',
    role: 'Design Strategist',
    address: {
      street: '31 Connaught Place',
      suite: 'N Block',
      city: 'New Delhi',
      state: 'Delhi',
      zipcode: '110001',
    },
    company: {
      name: 'Delhi Design Co.',
      catchPhrase: 'Brand systems and digital experience design',
    },
  },
  {
    name: 'Vikram Singh',
    username: 'vikram.singh',
    email: 'vikram.singh@jaipurcrafts.in',
    phone: '+91 94140 77592',
    website: 'jaipurcrafts.in',
    role: 'Vendor Relations Head',
    address: {
      street: '9 MI Road',
      suite: 'Heritage Wing',
      city: 'Jaipur',
      state: 'Rajasthan',
      zipcode: '302001',
    },
    company: {
      name: 'Jaipur Crafts Collective',
      catchPhrase: 'Artisan sourcing and retail partnerships',
    },
  },
  {
    name: 'Meera Patel',
    username: 'meera.patel',
    email: 'meera.patel@suratfinserv.in',
    phone: '+91 98251 33044',
    website: 'suratfinserv.in',
    role: 'Client Success Lead',
    address: {
      street: '52 Ring Road',
      suite: 'Office 501',
      city: 'Surat',
      state: 'Gujarat',
      zipcode: '395002',
    },
    company: {
      name: 'Surat Finserv Partners',
      catchPhrase: 'SME banking and investment support',
    },
  },
  {
    name: 'Arjun Menon',
    username: 'arjun.menon',
    email: 'arjun.menon@kochimobility.in',
    phone: '+91 94470 66218',
    website: 'kochimobility.in',
    role: 'Fleet Supervisor',
    address: {
      street: '21 Marine Drive',
      suite: 'Bay View',
      city: 'Kochi',
      state: 'Kerala',
      zipcode: '682031',
    },
    company: {
      name: 'Kochi Mobility Services',
      catchPhrase: 'Fleet operations and commuter services',
    },
  },
  {
    name: 'Nisha Verma',
    username: 'nisha.verma',
    email: 'nisha.verma@punemedsys.in',
    phone: '+91 99224 51867',
    website: 'punemedsys.in',
    role: 'Support Manager',
    address: {
      street: '64 Baner Road',
      suite: 'Unit 12',
      city: 'Pune',
      state: 'Maharashtra',
      zipcode: '411045',
    },
    company: {
      name: 'Pune MedSys',
      catchPhrase: 'Healthcare software and clinic support',
    },
  },
];

function Dashboard() {
  const { data: users, loading, error } = useFetchData(USERS_API_URL);
  const displayUsers = users.map((user, index) => {
    const profile = indianProfiles[index % indianProfiles.length];

    return {
      ...user,
      ...profile,
      id: user.id,
    };
  });
  const totalCities = new Set(displayUsers.map((user) => user.address.city)).size;
  const totalCompanies = new Set(displayUsers.map((user) => user.company.name))
    .size;

  return (
    <div className="app-shell">
      <Navbar totalUsers={displayUsers.length} />

      <main className="dashboard">
        <section className="dashboard-hero" aria-labelledby="dashboard-title">
          <div>
            <p className="eyebrow">Organisation Directory</p>
            <h1 id="dashboard-title">Team Contacts</h1>
            <p className="hero-copy">
              View contact, location, and company records from a responsive
              workspace built for quick daily reference.
            </p>
          </div>

          <div className="summary-grid" aria-label="Directory summary">
            <div className="summary-card">
              <span className="summary-value">{displayUsers.length}</span>
              <span className="summary-label">People</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">{totalCompanies}</span>
              <span className="summary-label">Companies</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">{totalCities}</span>
              <span className="summary-label">Cities</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">
                {loading ? 'Syncing' : 'Ready'}
              </span>
              <span className="summary-label">Status</span>
            </div>
          </div>
        </section>

        <section className="table-panel" aria-label="User records">
          {loading && <LoadingSpinner />}
          {!loading && error && <ErrorMessage message={error} />}
          {!loading && !error && <UserTable users={displayUsers} />}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
