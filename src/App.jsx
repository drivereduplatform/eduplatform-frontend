import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';
import './style-global.css'
import './style-main.css'
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
