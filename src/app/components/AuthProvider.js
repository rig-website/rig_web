'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '@/redux/authSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;