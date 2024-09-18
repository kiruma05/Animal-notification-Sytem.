import { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      // Call the logout function from AuthContext
      await logout();

      // Optionally, handle any additional logic here
      console.log('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout: handleLogout, isLoading };
};
