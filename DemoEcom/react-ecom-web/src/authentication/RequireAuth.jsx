import React, { useEffect } from 'react';
import { useAuth } from './auth'; 
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children, loginPath }) => {
  const { isAuthenticated } = useAuth(); 

  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = loginPath; 
    }
  }, [isAuthenticated, loginPath]);

  return isAuthenticated ? children : navigator(loginPath);
};

export default RequireAuth;
