import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContactItem from '../../ui-kit/ContactItem/ContactItem';
import CONTACTS from '../../constants/contacts';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
} from '../../ui-kit/Icons';

const useStyles = makeStyles({
  contacts: {
    backgroundColor: '#f8f8f8',
    padding: '63px 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  list: {
    width: '20%',
    listStyle: 'none',
  },
  title: {
    fontSize: '13px',
    lineHeight: '1.54',
    textTransform: 'uppercase',
    color: '#575153',
    marginBottom: '33px',
  },
  item: {
    marginBottom: '6px',
    '&:last-child': {
      marginBottom: '0',
    },
  },
  text: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '1.43',
    color: '#727272',
    marginBottom: '20px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00c8c8',
    },
  },
  link: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '1.43',
    color: '#727272',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00c8c8',
    },
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '62px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '300',
    lineHeight: '1.33',
    letterSpacing: '1.8px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    backgroundColor: '#333333',
    padding: '62px 53px',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    padding: '83px 172px',
    listStyle: 'none',
    backgroundColor: '#00c8c8',
  },
  socialItem: {
    height: '34px',
    marginLeft: '30px',
    '&:first-child': {
      marginLeft: '0',
    },
  },
  icon: {
    fontSize: '34px',
    color: '#ffffff',
  },
});

const Contacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.contacts}>
      <div className="wrapper">
        <div className={classes.nav}>
          {CONTACTS.map((item) => (
            <ContactItem
              key={item.title}
              title={item.title}
              items={item.items}
            />
          ))}
          <ul className={classes.list}>
            <h3 className={classes.title}>contact details</h3>
            <li className={classes.item}>
              <p className={classes.text}>
                Head Office: Avenue Fashion, 180-182 Regent Street, London.
              </p>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="tel:0123-456-789">
                Telephone: 0123-456-789
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="mailto:support@yourwebsite.com">
                Email: support@yourwebsite.com
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.bottom}>
          <h2 className={classes.heading}>
            <b>award winner</b>
            <br />
            fashion awards 2016
          </h2>
          <ul className={classes.social}>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                <FacebookIcon className={classes.icon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <TwitterIcon className={classes.icon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
              >
                <InstagramIcon className={classes.icon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.pinterest.com"
              >
                <PinterestIcon className={classes.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
