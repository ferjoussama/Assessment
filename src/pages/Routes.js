import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/layout'
import Dashboard from './Dashboard'
import Booking from './Booking'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/Booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  )
}
