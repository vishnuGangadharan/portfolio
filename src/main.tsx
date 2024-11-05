import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <NextUIProvider>
    <App />
    </NextUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
