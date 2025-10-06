import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Constitution from './pages/Constitution';
import Officials from "./pages/Officials";
import FloatingWidget from "./components/FloatingWidget";





 


export default function App() {
  return (
    <div className="font-body text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officials" element={<Officials />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingWidget />
      <Footer />
    </div>
  )
}