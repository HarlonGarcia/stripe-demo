import { BrowserRouter, Route, Routes } from 'react-router'

import Header from '@/components/header'
import Home from '@/pages/home'
import Wallet from '@/pages/wallet';
import Details from "@/pages/details";
import NotFound from './pages/not-found';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
