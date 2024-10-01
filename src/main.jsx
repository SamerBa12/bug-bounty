import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/cairo";
import './assets/css/root/root.css'
import { Provider } from 'react-redux';
import {store} from './redux/store.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
