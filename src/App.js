import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Views/Home/Home';
import Product from './components/Views/Products/Product';
import Contact from './components/Views/Contact/Contact';
import About from './components/Views/About/About';

function App() {
  return (
    <Router>
      <div className="app">
       <Routes>
          <Route path="/about" element={ <About /> } />
          <Route path="/contacts" element={ <Contact /> } />
          <Route path="/products" element={<Product />} />
          <Route path="/" element={<Home />} />
       </Routes>
     </div> 
    </Router>
  );
}

export default App;
