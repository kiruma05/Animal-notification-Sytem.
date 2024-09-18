import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load the current user from the session on component mount
  useEffect(() => {
    async function loadUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }
    loadUser();
  }, []);

  const handleSignup = async ({ fullName, email, password }) => {
    const newUser = await signupUser({ fullName, email, password });
    setUser(newUser);
    return newUser;
  };

  const handleLogin = async ({ email, password }) => {
    const loggedInUser = await loginUser({ email, password });
    setUser(loggedInUser);
    return loggedInUser;
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  const handleUpdateCurrentUser = async (data) => {
    const updatedUser = await updateCurrentUser(data);
    setUser(updatedUser);
    return updatedUser;
  };

  return (
    <AuthContext.Provider value={{ user, signup: handleSignup, login: handleLogin, logout: handleLogout, updateCurrentUser: handleUpdateCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

const apiUrl = "http://localhost:3000"; // URL for JSON Server

// Helper function for signup
export async function signupUser({ fullName, email, password }) {
  const newUser = {
    fullName,
    email,
    password,
    avatar: "",
  };

  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return await response.json();
}

// Helper function for login
export async function loginUser({ email, password }) {
  const response = await fetch(`${apiUrl}/users`);
  const users = await response.json();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Simulate a session by returning the user data
  return user;
}

// Helper function for getting the current user
export async function getCurrentUser() {
  // Simulate getting a user from a session
  const response = await fetch(`${apiUrl}/sessions`);
  if (!response.ok) return null;

  return await response.json();
}

// Helper function for logout
export async function logoutUser() {
  // Clear the session
  const response = await fetch(`${apiUrl}/sessions`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to log out");
  }
}

// Helper function for updating the current user
export async function updateCurrentUser({ password, fullName, avatar }) {
  const response = await fetch(`${apiUrl}/currentUser`);
  const currentUser = await response.json();

  const updatedUser = {
    ...currentUser,
    password: password || currentUser.password,
    fullName: fullName || currentUser.fullName,
    avatar: avatar || currentUser.avatar,
  };

  const updateResponse = await fetch(`${apiUrl}/users/${currentUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  if (!updateResponse.ok) {
    throw new Error("Failed to update user");
  }

  return await updateResponse.json();
}
