import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './styles/index.scss';

const routes = (
  <Router>
      <Route path="/" Component={App} />
  </Router>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>{routes}</React.StrictMode>,
);
