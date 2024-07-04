import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNightMode } from './NightModeContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const { isNightMode } = useNightMode();

  return (
    <Router>
      <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
