import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Info from './pages/Info';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;