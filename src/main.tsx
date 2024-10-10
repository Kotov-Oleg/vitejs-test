import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // For React 17
import App from './App.tsx';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') // No need for "!" after root in React 17
);
