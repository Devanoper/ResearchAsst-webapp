import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FeatureCards from './components/FeatureCards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <h2>Looking for a Research Assistant?</h2>
        <LoginForm />
      </div>
      <FeatureCards />
    </div>
  );
}

export default App;
