import { BrowserRouter, Routes, Route } from "react-router";

import GlobalProvider from "./state/globalProvider";

import About from "./pages/About";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className='app d-flex flex-column min-vh-100'>
            <Navbar /> 
            
            <main className="flex-grow-1 mx-4">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
