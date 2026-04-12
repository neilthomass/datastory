import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Apply from './pages/Apply'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        {/* Redirects for old routes */}
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/development" element={<Home />} />
        <Route path="/team" element={<Home />} />
        <Route path="/contact" element={<Apply />} />
      </Route>
    </Routes>
  )
}

export default App
