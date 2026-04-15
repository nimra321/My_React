import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Layout from '../outlet/Outlet'
import Contact from '../pages/Contact'
import SingleProduct from '../pages/SingleProduct'
import About from '../pages/About'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter