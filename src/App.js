import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Views/Home/Home';
import Product from './components/Views/Products/Product';

function App() {
  return (
    <Router>
      <div className="app">
       <Routes>
          <Route path="/checkout" element={<h1>checkout</h1>} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
       </Routes>
     </div> 
    </Router>
  );
}

export default App;
