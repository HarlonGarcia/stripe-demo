import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import Home from './pages/home'
import Wallet from './pages/wallet';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
