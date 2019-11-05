import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const SignUpPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>SignUpPage</h2>
    </div>
  );
};

export default SignUpPage;
