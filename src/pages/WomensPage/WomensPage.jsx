import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const WomensPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>WomensPage</h2>
    </div>
  );
};

export default WomensPage;
