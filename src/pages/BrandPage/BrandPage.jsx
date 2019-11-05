import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../../ui-kit/Banner/Banner';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
  },
}));

const BrandPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="the brand"
        text="company slogan goes here"
      />
      <h2 className={classes.title}>Brand page</h2>
    </div>
  );
};

export default BrandPage;
