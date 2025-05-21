import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Registration</NavLink> |{' '}
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink> |{' '}
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink> |{' '}
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
