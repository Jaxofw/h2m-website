import Navbar from '@/components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
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
