import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default HomePage;
