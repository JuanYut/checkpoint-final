import React from 'react';
// * Switch and Route
import { Switch, Route } from 'react-router-dom';

// * Components
import HomeContainer from '../../containers/Home/views/Home.container';
import Error404 from '../../shared/components/Error404/Error404.component';

const PublicRoutes = () => {
  return (
    // * Return All the Public Components
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route component={Error404} />
    </Switch>
  );
};

export default PublicRoutes;
