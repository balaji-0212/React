const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

async function requestJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getUsers() {
  const users = await requestJson(API_BASE_URL);
  return Array.isArray(users) ? users : [];
}

export async function getUserById(id) {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new Error('Invalid user ID. Please choose a valid user from the list.');
  }

  const user = await requestJson(`${API_BASE_URL}/${parsedId}`);

  if (!user || !user.id) {
    throw new Error('User not found. Please choose a valid user from the list.');
  }

  return user;
}
