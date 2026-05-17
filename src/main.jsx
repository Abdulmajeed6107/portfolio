import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import 'animate.css';
import CustomNav from './components/navbar.jsx'
import { useInView } from "react-intersection-observer";
import Contact from './pages/Contact.jsx'
import useTheme  from './components/useThem.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
