import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';

// Route imports
import HomePage from '../../pages/HomePage/HomePage';
import BrandPage from '../../pages/BrandPage/BrandPage';

const Router = () => {
  return (
    <Switch>
      <Layout exact path="/" component={HomePage} />
      <Layout path="/brand" component={BrandPage} />
    </Switch>
  );
};

export default Router;
