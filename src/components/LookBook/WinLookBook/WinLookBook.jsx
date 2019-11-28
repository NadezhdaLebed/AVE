import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '../../../ui-kit/Button/Button';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    background:
      'linear-gradient(0deg, rgba(239,239,237,1) 0%, rgba(248,248,249,1) 100%)',
    width: '74.5%',
    height: '360px',
  },
  content: {
    width: '42%',
  },
  title: {
    fontSize: '40px',
    fontWeight: '300',
    lineHeight: '1.13',
    letterSpacing: '2.4px',
    color: '#575153',
    textTransform: 'uppercase',
    marginTop: '20px',
    marginLeft: '14px',
  },
  subtitle: {
    fontSize: '11px',
    lineHeight: '1.54',
    color: '#727272',
    textTransform: 'uppercase',
    marginTop: '20px',
    marginLeft: '14px',
  },
  text: {
    width: '90%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '20px',
    marginLeft: '14px',
    '&:first-child': {
      marginTop: '0px',
    },
  },
  button: {
    marginTop: '20px',
    marginLeft: '14px',
  },
  img: {
    width: '25%',
  },
  span: {
    position: 'absolute',
    top: '120px',
    right: '0px',
    lineHeight: '100px',
  },
  heading: {
    fontSize: '150px',
    fontWeight: 'bold',
    letterSpacing: '10px',
    color: '#00c8c8',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  subheading: {
    fontSize: '53px',
    fontWeight: 'bold',
    letterSpacing: '3.6px',
    color: '#00c8c8',
    textTransform: 'uppercase',
    textAlign: 'right',
    marginRight: '18px',
  },
});

const WinLookBook = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          <b>Win</b> a new look!
        </h2>
        <h3 className={classes.subtitle}>
          add looks or items to your lookbook for a chance of winning{' '}
        </h3>
        <p className={classes.text}>
          See an item or a complete look you like, click the &#9825; button to
          add it to your lookbook and you’ll be automatically entered to our
          monthly draw where one winner gets a <b>£300</b> gift voucher to spend
          on our website!
        </p>
        <p className={classes.text}>
          Terms: No purchase necessary. Vouchers are non-transferable and no
          cash alternative is ofered. Competition is for members only.
        </p>
        <Button className={classes.button}>Shop now</Button>
      </div>
      <img
        className={classes.img}
        src="../../assets/png/winLookBook.png"
        alt="Win look"
      />
      <span className={classes.span}>
        <h1 className={classes.heading}>Win</h1>
        <h2 className={classes.subheading}>a new look</h2>
      </span>
    </div>
  );
};

export default WinLookBook;
