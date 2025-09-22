import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InventoryProvider from '@contexts/inventory/InventoryProvider.jsx'
import CraftProvider from './contexts/craft/CraftProvider.jsx'
import DiscoveredProvider from './contexts/discovered/DiscoveredProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiscoveredProvider>
        <InventoryProvider>
          <CraftProvider>
            <App />
          </CraftProvider>
        </InventoryProvider>
    </DiscoveredProvider>
  </StrictMode>
)
