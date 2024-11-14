import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from './dashboard/page.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
