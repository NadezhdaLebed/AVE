import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';

// Route imports
import HomePage from '../../pages/HomePage';
import BrandPage from '../../pages/BrandPage';

const Router = () => {
  return (
    <Switch>
      <Layout exact path="/" component={HomePage} />
      <Layout path="/brand" component={BrandPage} />
    </Switch>
  );
};

export default Router;
