'use client';

import { Provider } from 'react-redux';
import { initializeStore } from '@/redux/store';

export function Providers({ children }) {
  const store = initializeStore();
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}