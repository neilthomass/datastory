import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Apply from './pages/Apply'
import Team from './pages/Team'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/apply" element={<Apply />} />
        {/* Redirects for old routes */}
        <Route path="/about" element={<Services />} />
        <Route path="/projects" element={<Services />} />
        <Route path="/development" element={<Services />} />
        <Route path="/contact" element={<Apply />} />
      </Route>
    </Routes>
  )
}

export default App
