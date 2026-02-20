import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact';
import Products from "./components/Products";
import Phone from "./components/Phone";
import Laptop from "./components/Laptop";

function App() {

  function User() {
    console.log(useParams());
    const { id } = useParams();
    return (
      <div>
        <h1> User Profile for ID : {id} </h1>
      </div>
    )
  }

  function NotFound() {
    return (
      <h2>404 - Page Not Found</h2>
    )
  }
  return (
    <>
      <BrowserRouter>
      <h1> React Router Dom</h1>
      <nav>
        <Link to="/">Home </Link> |
        <Link to="/about">About </Link> |
        <Link to="/contact">Contact </Link> |
        <Link to="/user/10">User </Link> |
        <Link to="/products">Products </Link> |
      </nav>
        
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/user/:id" element={ <User /> } />
          {/* Parent Route to Child Route */}
          <Route path="/products" element={ <Products /> }>
            <Route path="phone" element={ <Phone /> } />
            <Route path="laptop" element={ <Laptop /> } />
          </Route>

          {/* * means if the path is not in the above routes then is shows this notFound page */}
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
