import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"
import Navbar from "./components/Navbar"
import Career from "./components/Career"
import Subscription from "./components/Subscription"
import Product from "./components/Product"
import SingleProduct from "./components/SingleProduct"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="career" element={<Career />}></Route>
            <Route path="subscription" element={<Subscription />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:mobile" element={<SingleProduct />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App