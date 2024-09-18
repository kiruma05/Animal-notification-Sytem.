// services/apiAuth.js

const BASE_URL = 'http://localhost:3000/users';



// export function useAuth() {
//     return useContext(apiAuth);
//    }

// Signup function
export async function signup({ fullName, email, password, role }) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
      role, // Include role
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Signup failed');
  }

  return response.json();
}

// Login function
export async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}?email=${email}&password=${password}`);
  const users = await response.json();

  if (users.length === 0) {
    throw new Error('Invalid email or password');
  }

  return users[0]; // Assuming the first match is the correct user
}

// Get current user function
export async function getCurrentUser(userId) {
  const response = await fetch(`${BASE_URL}/${userId}`);
  const user = await response.json();

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}

// Logout function
export async function logout() {
  // JSON Server does not have a session management, so this is a no-op
  // Handle client-side logout by clearing authentication state
  return;
}

// Update current user function
export async function updateCurrentUser(userId, { password, fullName, avatar }) {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      fullName,
      avatar,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Update failed');
  }

  return response.json();
}
