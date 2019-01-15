import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import AppRoutes from './routes.js'

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
