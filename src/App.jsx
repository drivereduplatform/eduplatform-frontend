import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login';
import Main from './screens/Main';
import Register from './screens/Register';
import './style-global.css'
import './style-main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
