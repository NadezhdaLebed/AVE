import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';

// Route imports
import HomePage from '../../pages/HomePage/HomePage';
import BrandPage from '../../pages/BrandPage/BrandPage';
import LocalStorePage from '../../pages/LocalStorePage/LocalStorePage';
import LoookbookPage from '../../pages/LoookbookPage/LookbookPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import MensPage from '../../pages/MensPage/MensPage';
import WomensPage from '../../pages/WomensPage/WomensPage';
import ProductTablePage from '../../pages/ProductTablePage/ProductTablePage';

const Router = () => {
  return (
    <Switch>
      <Layout exact path="/" component={HomePage} />
      <Layout path="/brand" component={BrandPage} />
      <Layout path="/local-store" component={LocalStorePage} />
      <Layout path="/look-book" component={LoookbookPage} />
      <Layout path="/product" component={ProductPage} />
      <Layout path="/sign-up" component={SignUpPage} />
      <Layout path="/mens" component={MensPage} />
      <Layout path="/womens" component={WomensPage} />
      <Layout path="/product-table" component={ProductTablePage} />
    </Switch>
  );
};

export default Router;
