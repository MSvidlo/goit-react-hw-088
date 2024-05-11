
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsLoading, selectIsRefreshing } from './redux/auth/selectors';
import { lazy } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Layout} from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { CONSTANTS } from './components/constants';
import Modal from 'react-modal';
import { loadEnv } from 'vite';
import { loading } from './redux/contacts/contactsSlice';

const HomePage = lazy(() => import('./pages/HomePage/HomePage')); 
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
 const { isRefreshing } = useSelector(selectIsRefreshing)

  
  const selectLoadingAuth = useSelector(selectIsLoading);
  const selectLoadingContacts = useSelector(loading);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return     isRefreshing ? (
    <b>Refreshing user...</b>) : (
    <Layout>
      <Routes forceRefresh={true}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Routes>
           <Modal
        style={CONSTANTS.modalStyles}
        isOpen={selectLoadingAuth || selectLoadingContacts}
      >
        </Modal>
    </Layout>
  
  )
};
export default App;
 
