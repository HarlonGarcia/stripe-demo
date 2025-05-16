import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import Home from './pages/home'
import Wallet from './pages/wallet';
import PostDemo from "./pages/post-demo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/post-demo" element={<PostDemo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
