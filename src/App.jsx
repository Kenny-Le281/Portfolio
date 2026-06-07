import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import MemoryGame from './page-holders/MemoryGame'
import EcommerceStore from './page-holders/EcommerceStore'
import AnalyticsDashboard from './page-holders/AnalyticsDashboard'

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Project placeholder pages */}
      <Route path="/memory-game" element={<MemoryGame />} />
      <Route path="/ecommerce" element={<EcommerceStore />} />
      <Route path="/analytics" element={<AnalyticsDashboard />} />

    </Routes>
  )
}

export default App
