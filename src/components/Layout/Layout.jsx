import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const Layout = (props) => {
  const { path, component } = props;

  return (
    <React.Fragment>
      <Header />
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
