import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter.routes';

// * Ant-Design
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';

// * Provider and Store for Redux
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  root
);
