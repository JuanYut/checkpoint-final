import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../components/Home/Home.component';

const PublicRoutes = () => {
  return (
    // * Return All the Public Components
    <Route path='/' component={Home} />
  );
};

export default PublicRoutes;
