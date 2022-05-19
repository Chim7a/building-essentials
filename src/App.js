import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Views/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
       <Routes>
          <Route path="/checkout" element={<h1>checkout</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={<Home />} />
       </Routes>
     </div> 
    </Router>
  );
}

export default App;
