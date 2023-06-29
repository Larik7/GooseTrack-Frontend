import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { TourProvider } from '@reactour/tour'
import {steps} from './components/Tour/steps'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/GooseTrack-Frontend">
          <TourProvider steps={steps}>
            <App />
          </TourProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
