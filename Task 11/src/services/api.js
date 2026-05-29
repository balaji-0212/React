const RANDOM_USER_API_URL = 'https://randomuser.me/api/?nat=in&results=10&seed=react-useparams';

const companyProfiles = [
  {
    name: 'Bengaluru Digital Labs',
    domain: 'bengalurudigital.com',
    catchPhrase: 'Building reliable web platforms for fast-growing teams',
    bs: 'full-stack product engineering',
  },
  {
    name: 'Cochin Cloud Works',
    domain: 'cochincloudworks.com',
    catchPhrase: 'Cloud operations that keep business systems running smoothly',
    bs: 'managed cloud services',
  },
  {
    name: 'Mumbai Fintech Studio',
    domain: 'mumbaifintechstudio.com',
    catchPhrase: 'Practical finance products for everyday customers',
    bs: 'payment platform design',
  },
  {
    name: 'Chennai Product House',
    domain: 'chennaiproducthouse.com',
    catchPhrase: 'Human-centered software for service and support teams',
    bs: 'product strategy and delivery',
  },
  {
    name: 'Delhi Growth Partners',
    domain: 'delhigrowthpartners.com',
    catchPhrase: 'Data-backed growth systems for ambitious brands',
    bs: 'customer acquisition analytics',
  },
  {
    name: 'Hyderabad Health Tech',
    domain: 'hyderabadhealthtech.com',
    catchPhrase: 'Accessible digital care for local communities',
    bs: 'health platform operations',
  },
  {
    name: 'Kolkata Media Grid',
    domain: 'kolkatamediagrid.com',
    catchPhrase: 'Content systems for regional publishers and creators',
    bs: 'media workflow automation',
  },
  {
    name: 'Pune Learning Systems',
    domain: 'punelearningsystems.com',
    catchPhrase: 'Skill-building platforms for career-ready learners',
    bs: 'education technology services',
  },
  {
    name: 'Vizag Maritime Analytics',
    domain: 'vizagmaritimeanalytics.com',
    catchPhrase: 'Clear logistics intelligence for port operations',
    bs: 'supply chain intelligence',
  },
  {
    name: 'Jaipur Craft Commerce',
    domain: 'jaipurcraftcommerce.com',
    catchPhrase: 'Digital commerce tools for traditional makers',
    bs: 'marketplace enablement',
  },
];

async function requestJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getUsers() {
  const data = await requestJson(RANDOM_USER_API_URL);
  const users = Array.isArray(data.results) ? data.results : [];
  return users.map(formatUser);
}

export async function getUserById(id) {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new Error('Invalid user ID. Please choose a valid user from the list.');
  }

  const users = await getUsers();
  const user = users.find((currentUser) => currentUser.id === parsedId);

  if (!user || !user.id) {
    throw new Error('User not found. Please choose a valid user from the list.');
  }

  return user;
}

function formatUser(apiUser, index) {
  const id = index + 1;
  const firstName = apiUser.name?.first || 'User';
  const lastName = apiUser.name?.last || String(id);
  const fullName = `${firstName} ${lastName}`;
  const company = companyProfiles[index % companyProfiles.length];
  const emailName = `${firstName}.${lastName}`.toLowerCase().replace(/[^a-z]/g, '.');
  const streetNumber = apiUser.location?.street?.number;
  const streetName = apiUser.location?.street?.name;
  const street = [streetNumber, streetName].filter(Boolean).join(', ');

  return {
    id,
    name: fullName,
    username: apiUser.login?.username || `${firstName.toLowerCase()}${id}`,
    email: `${emailName}@${company.domain}`,
    phone: formatPhone(apiUser.phone || apiUser.cell),
    website: `www.${company.domain}`,
    picture: apiUser.picture?.medium || apiUser.picture?.large || '',
    company: {
      name: company.name,
      catchPhrase: company.catchPhrase,
      bs: company.bs,
    },
    address: {
      street: street || 'Main Road',
      suite: `Near ${apiUser.location?.city || 'City Centre'} Business Park`,
      city: apiUser.location?.city || 'Bengaluru',
      zipcode: String(apiUser.location?.postcode || '560001'),
    },
  };
}

function formatPhone(phoneNumber = '') {
  const digits = phoneNumber.replace(/\D/g, '').slice(-10);

  if (digits.length !== 10) {
    return phoneNumber || 'Not available';
  }

  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}
