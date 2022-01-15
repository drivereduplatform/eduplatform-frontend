import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style-global.css'
import './style-main.css'
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register">

        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
