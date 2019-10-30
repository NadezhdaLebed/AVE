import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
  },
}));

const BrandPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Brand page</h2>
      <Link to="/">To home</Link>
    </div>
  );
};

export default BrandPage;
