import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
