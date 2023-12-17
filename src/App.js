import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {document.title = 'Nick van Gerwen - Portfolio'}
        <Route path="/Portfolio/Home" element={<Home />} />
        <Route path="/Portfolio/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
