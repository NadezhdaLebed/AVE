import React from 'react';
import { makeStyles } from '@material-ui/core';
import EmptyButton from '../../ui-kit/EmptyButton/EmptyButton';
import CurrencyButton from '../../ui-kit/CurrencyButton/CurrencyButton';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    fontSize: '13px',
    lineHeight: '1.54',
    textDecoration: 'none',
    color: '#999999',
    marginLeft: '40px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00c8c8',
    },
    '&:first-child': {
      marginLeft: '0',
    },
  },
  EmptyButton: {
    marginLeft: '82px',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className="wrapper">
        <CurrencyButton className={classes.CurrencyButton} />
        <nav className={classes.nav}>
          <a className={classes.link} href="/">
            Register
          </a>
          <a className={classes.link} href="/signUp">
            Sign In
          </a>
          <EmptyButton className={classes.EmptyButton} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
