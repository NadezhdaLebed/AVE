import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const MensPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>MensPage</h2>
    </div>
  );
};

export default MensPage;
