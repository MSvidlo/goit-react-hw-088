import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Modal from 'react-modal';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';


Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
            </HelmetProvider>
        </BrowserRouter>
        </PersistGate>
       </Provider>
  </React.StrictMode>
);