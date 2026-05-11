import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Engineering from './pages/Engineering'
import Product from './pages/Product'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </>
  )
}
