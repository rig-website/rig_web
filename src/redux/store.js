import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/authSlice';


const makeStore = (preloadedState = undefined) => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState,
  });
};


let store;

export const initializeStore = (preloadedState = undefined) => {
  let _store = store ?? makeStore(preloadedState);


  if (typeof window === 'undefined') {
    return _store;
  }

  
  if (!store) {
    store = _store;
  }

  return _store;
};


export const getStore = () => store;


export default initializeStore();