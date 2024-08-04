import { Route, Routes } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home'
import Install from '@/pages/Install/Install'

function App() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </div>
  )
}

export default App
