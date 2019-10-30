import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import history from './history';
import theme from './theme';

// Route imports
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';

const App = () => {
  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/brand" component={BrandPage} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
