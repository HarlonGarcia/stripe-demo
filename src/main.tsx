import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalProvider } from './contexts/GlobalContext.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </QueryClientProvider>
  </StrictMode>,
)
