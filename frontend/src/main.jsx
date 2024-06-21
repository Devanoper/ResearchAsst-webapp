import ReactDOM from 'react-dom';
import App from './App';
import { NightModeProvider } from './NightModeContext';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NightModeProvider>
    <App />
  </NightModeProvider>,
  document.getElementById('root')
);
