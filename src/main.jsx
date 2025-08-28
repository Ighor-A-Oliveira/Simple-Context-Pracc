import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProvider from './context/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this single provider component bundles all of the context provider inside it */}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
