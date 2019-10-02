import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../routes/AppRouter.routes';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  root
);
