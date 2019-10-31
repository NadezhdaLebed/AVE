import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const Layout = (props) => {
  const { path, component } = props;

  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <main>
        <Route path={path} component={component} exact {...props} />
      </main>
      <Contacts />
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;

export default Layout;
