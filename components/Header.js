import '../styles/header.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/allProducts";
import Contact from "../pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className='navBar'>
            <nav>
              <Link to="/" className='navul'>Home</Link>
              <Link to="/products" className='navul'>Adopt</Link>
              <Link to="/contact" className='navul'>Adopt Form</Link>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
       
    </div>
  );
}

export default App;
