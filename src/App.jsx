import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style-global.css'
import './style-main.css'
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
