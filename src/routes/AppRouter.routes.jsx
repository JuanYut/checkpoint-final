import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoutes from './public/Public.routes';
import PrivateRoutes from './private/Private.routes';

import App from '../App/App';

const AppRouter = () => {
  return (
    <App>
      <Switch>
        <PublicRoutes />
        <PrivateRoutes />
      </Switch>
    </App>
  );
};

export default AppRouter;
