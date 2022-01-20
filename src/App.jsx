import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';
import './style-global.css'
import './style-main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
