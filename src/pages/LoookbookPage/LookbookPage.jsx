import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const LookbookPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>LookbookPage</h2>
    </div>
  );
};

export default LookbookPage;
