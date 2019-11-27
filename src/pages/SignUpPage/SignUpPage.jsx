import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../../ui-kit/Banner/Banner';
import Button from '../../ui-kit/Button/Button';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    marginTop: '61px',
    marginBottom: '124px',
  },
  sign: {
    width: '50%',
    borderRight: '1px solid #eeeeee',
    paddingRight: '35px',
  },
  register: {
    width: '50%',
    paddingLeft: '35px',
  },
  title: {
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#575153',
    textTransform: 'uppercase',
  },
  inputBlock: {
    marginTop: '46px',
  },
  input: {
    display: 'flex',
    width: '100%',
    fontSize: '15px',
    fontWeight: '300',
    lineHeight: '1.47',
    color: '#989898',
    backgroundColor: 'transparent',
    border: 'solid 1px #e7e7e7',
    marginBottom: '34px',
    padding: '15px 9px',
    '&:last-child': {
      marginBottom: '0px',
    },
    '&:required': {
      border: 'solid 1px #bb5465',
      backgroundColor: 'rgba 187 84 101, 0.05',
    },
  },
  signBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  link: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#00c8c8',
    textDecoration: 'none',
    '&:hover': {
      '& $linkArrow': {
        marginLeft: '3px',
      },
    },
  },
  linkArrow: {
    transition: 'all 0.3s ease',
  },
  inputCheckbox: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    width: '24px',
    height: '24px',
    border: 'solid 1px #e7e7e7',
    backgroundColor: 'transparent',
    marginRight: '15px',
  },
  checkboxText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
  },
  registerBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  registerText: {
    width: '40%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
  },
});

const SignUpPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="welcome to Ave"
        text="sign in or register"
      />
      <div className="wrapper">
        <div className={classes.content}>
          <div className={classes.sign}>
            <h1 className={classes.title}>sign in</h1>
            <div className={classes.inputBlock}>
              <input
                className={classes.input}
                type="text"
                placeholder="Your Email.."
                required
              />
              <input
                className={classes.input}
                type="password"
                placeholder="Your password.."
                required
              />
            </div>
            <div className={classes.signBlock}>
              <Button className={classes.button}>Sign in</Button>
              <a className={classes.link} href="/">
                Forgot your Password{' '}
                <span className={classes.linkArrow}>&#8594;</span>
              </a>
            </div>
          </div>
          <div className={classes.register}>
            <h1 className={classes.title}>Register</h1>
            <div className={classes.inputBlock}>
              <input
                className={classes.input}
                type="text"
                placeholder="Your Email.."
                required
              />
              <input
                className={classes.input}
                type="password"
                placeholder="Your password.."
                required
              />
              <input
                className={classes.input}
                type="password"
                placeholder="Confirm password.."
                required
              />
              <div className={classes.inputCheckbox}>
                <input className={classes.checkbox} type="checkbox" required />
                <p className={classes.checkboxText}>
                  Sign up for exclusive updates, discounts, new arrivals,
                  contests, and more!
                </p>
              </div>
            </div>
            <div className={classes.registerBlock}>
              <Button className={classes.button}>Create Account</Button>
              <p className={classes.registerText}>
                By clicking ‘Create Account’, you agree to our{' '}
                <a className={classes.link} href="/">
                  Privacy Policy{' '}
                  <span className={classes.linkArrow}>&#8594;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
