import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const LocalStorePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>LocalStorePage</h2>
    </div>
  );
};

export default LocalStorePage;
