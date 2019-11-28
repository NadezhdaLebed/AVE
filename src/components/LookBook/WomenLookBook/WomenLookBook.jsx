import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '../../../ui-kit/Button/Button';

const useStyles = makeStyles({
  container: {
    width: '49%',
    height: '360px',
  },
  content: {
    backgroundImage: 'url(../../assets/png/womenLookBook.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: '40px',
    fontWeight: '300',
    lineHeight: '1.13',
    letterSpacing: '2.4px',
    color: '#575153',
    textTransform: 'uppercase',
    paddingTop: '35px',
    marginLeft: '15px',
  },
  subtitle: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
    textTransform: 'uppercase',
    marginTop: '20px',
    marginLeft: '15px',
  },
  text: {
    width: '37%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '20px',
    marginLeft: '15px',
    '&:first-child': {
      marginTop: '0px',
    },
  },
  button: {
    marginTop: '25px',
    marginLeft: '15px',
  },
});

const WomenLookBook = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          <b>Jane’s</b> lookbook
        </h2>
        <h3 className={classes.subtitle}>get the look for under £200!</h3>
        <p className={classes.text}>
          We invited actress Jane Marshall to join us for the day and choose her
          perfect outfit from our vast range of womens fashion.
        </p>
        <p className={classes.text}>
          This is of course not true as this is just a design for a website and
          this is simply filler text.
        </p>
        <Button className={classes.button}>view now</Button>
      </div>
    </div>
  );
};
export default WomenLookBook;
