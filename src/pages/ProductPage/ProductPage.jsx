import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const ProductPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>ProductPage</h2>
    </div>
  );
};

export default ProductPage;
