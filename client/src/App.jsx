import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNightMode } from './NightModeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

function App() {
  const { isNightMode } = useNightMode();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
