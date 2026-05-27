import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Coffee from './pages/Coffee'
import Cups from './pages/Cups'
import Machine from './pages/Machine'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/cups' element={<Cups />} />
        <Route path='/machine' element={<Machine />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App;