import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home.jsx';
// Supports weights 100-900
import '@fontsource-variable/roboto-condensed';
// Supports weights 400-800
import '@fontsource-variable/syne';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
