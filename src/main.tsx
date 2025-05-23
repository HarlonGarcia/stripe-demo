import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'

import { GlobalProvider } from '@/contexts/GlobalContext.tsx'
import { queryClient } from '@/services/queryClient/index.ts'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </QueryClientProvider>
  </StrictMode>,
)
