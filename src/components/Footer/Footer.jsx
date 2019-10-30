import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    paddingTop: '17px',
    paddingBottom: '17px',
  },
  text: {
    fontSize: '13px',
    lineHeight: '2.31',
    color: '#999999',
  },
  container: {
    display: 'flex',
  },
  contacts: {
    display: 'flex',
    marginLeft: '30px',
    '&:first-child': {
      marginLeft: '0',
    },
  },
  link: {
    fontSize: '13px',
    lineHeight: '2.31',
    textDecoration: 'none',
    color: '#999999',
    marginLeft: '5px',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className="wrapper">
        <p className={classes.text}>© 2016 Avenue Fashion™</p>
        <nav className={classes.container}>
          <span className={classes.contacts}>
            <p className={classes.text}>Dev by</p>
            <a className={classes.link} href="/">
              RobbyDesigns.com{' '}
            </a>
          </span>
          <span className={classes.contacts}>
            <p className={classes.text}>Dev by</p>
            <a className={classes.link} href="/">
              Loremipsum.com
            </a>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
