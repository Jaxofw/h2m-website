import Navbar from '@/components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home/Home'

function App() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/install" element={<div>Install</div>} />
      </Routes>
    </div>
  )
}

export default App
