import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactsSlice";
import {filterReducer} from './filters/filtersSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/slice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};  

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filters: filterReducer
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);