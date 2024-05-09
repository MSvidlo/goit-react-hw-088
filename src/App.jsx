
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import { fetchContacts } from './redux/contacts/contactsOps';
import { lazy } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Layout} from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import('./pages/HomePage/HomePage')); 
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegiserPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
 const { isRefreshing } = useSelector(selectIsRefreshing)

  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return     isRefreshing ? (
    <b>Refreshing user...</b>) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  )
};
export default App;
 
