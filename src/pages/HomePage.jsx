import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '../ui-kit/Icon/Icon';

import search from '../assets/svg/search.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.dark,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Home page</h2>
      <Link to="/brand">To brand</Link>
      <Icon className={classes.icon} name={search} />
    </div>
  );
};

export default HomePage;
