// services/useAuth.js

import { useState, useEffect } from 'react';
import { login, logout, getCurrentUser } from './apiAuth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the current user from localStorage or an API if needed
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    const user = await login({ email, password });
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const signOut = () => {
    logout();
    setUser(null);
    localStorage.removeItem('user');
  };

  const fetchCurrentUser = async (userId) => {
    const currentUser = await getCurrentUser(userId);
    setUser(currentUser);
  };

  return {
    user,
    loading,
    signIn,
    signOut,
    fetchCurrentUser,
  };
}
