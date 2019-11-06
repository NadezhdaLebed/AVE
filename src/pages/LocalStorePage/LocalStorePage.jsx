import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../../ui-kit/Banner/Banner';
import Button from '../../ui-kit/Button/Button';
import {
  LocationIcon,
  TelephoneIcon,
  LinkIcon,
  EmailIcon,
  ClockIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
} from '../../ui-kit/Icons';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '60px 0',
  },
  title: {
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#575153',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
    textTransform: 'uppercase',
    marginTop: '29px',
  },
  text: {
    width: '96%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '18px',
  },
  button: {
    marginTop: '30px',
  },
  location: {
    display: 'flex',
    marginBottom: '124px',
    maxHeight: '530px',
  },
  map: {
    width: '65%',
  },
  imgMap: {
    width: '100%',
    height: '100%',
  },
  contacts: {
    width: '35%',
    backgroundColor: '#f8f8f8',
    padding: '42px 76px 91px 41px',
  },
  contactsTitle: {
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#575153',
    textTransform: 'uppercase',
  },
  contactsSubtitle: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
    textTransform: 'uppercase',
    marginTop: '29px',
  },
  contactsText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '18px',
  },
  contactsList: {
    listStyle: 'none',
    marginTop: '30px',
  },
  contactsItem: {
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: '0px',
    },
  },
  contactsLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#8e8c8c',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#00c8c8',
    },
  },
  contactIcon: {
    width: '14px',
    height: '15px',
  },
  contactsDescription: {
    fontSize: '14px',
    fontWeight: '300',
    marginLeft: '14px',
  },
  socialList: {
    display: 'flex',
    listStyle: 'none',
    marginTop: '62px',
  },
  socialItem: {
    marginLeft: '14px',
    '&:first-child': {
      marginLeft: '0px',
    },
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#727272',
    '&:hover': {
      backgroundColor: '#00c8c8',
    },
  },
  socialIcon: {
    width: '16px',
    height: '17px',
    color: '#ffffff',
  },
});

const LocalStorePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="Local stores"
        text="Find a store near you"
      />
      <div className="wrapper">
        <div className={classes.content}>
          <div className={classes.item}>
            <h2 className={classes.title}>London</h2>
            <h3 className={classes.subtitle}>
              180-182 Regent Street, London, W1B 5BT
            </h3>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing esi elit.
              Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec
              tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis.
              Aliquam erat volutpat.
            </p>
            <Button className={classes.button}>view Details</Button>
          </div>
          <div className={classes.item}>
            <h2 className={classes.title}>New York</h2>
            <h3 className={classes.subtitle}>
              109 Columbus Circle, New York, NY 10023
            </h3>
            <p className={classes.text}>
              Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam
              egestas, sem quis condimentum venenatis, erat leo fermentum dolor,
              non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non
              sodales nisl.
            </p>
            <Button className={classes.button}>view Details</Button>
          </div>
          <div className={classes.item}>
            <h2 className={classes.title}>Paris</h2>
            <h3 className={classes.subtitle}>
              2133 Rue Saint-Honoré, 75001 Paris
            </h3>
            <p className={classes.text}>
              Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus
              eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum
              ante ipsum primis in faucibus orcip luctus et ultrices posuere
              cubilia curae cras ligula.
            </p>
            <Button className={classes.button}>view Details</Button>
          </div>
        </div>
      </div>
      <div className={classes.location}>
        <div className={classes.map}>
          <img
            className={classes.imgMap}
            src="../assets/png/map.png"
            alt="map"
          />
        </div>
        <div className={classes.contacts}>
          <h2 className={classes.contactsTitle}>London</h2>
          <h3 className={classes.contactsSubtitle}>
            180-182 Regent Street, London, W1B 5BT
          </h3>
          <p className={classes.contactsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus
            at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio.
            Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat
            volutpat.
          </p>
          <ul className={classes.contactsList}>
            <li className={classes.contactsItem}>
              <a className={classes.contactsLink} href="/">
                <LocationIcon className={classes.contactIcon} />
                <span className={classes.contactsDescription}>
                  180-182 Regent Street, London, W1B 5BT
                </span>
              </a>
            </li>
            <li className={classes.contactsItem}>
              <a className={classes.contactsLink} href="tel:0123-456-789">
                <TelephoneIcon className={classes.contactIcon} />
                <span className={classes.contactsDescription}>
                  0123-456-789
                </span>
              </a>
            </li>
            <li className={classes.contactsItem}>
              <a className={classes.contactsLink} href="www.yourwebsite.com">
                <LinkIcon className={classes.contactIcon} />
                <span className={classes.contactsDescription}>
                  www.yourwebsite.com
                </span>
              </a>
            </li>
            <li className={classes.contactsItem}>
              <a
                className={classes.contactsLink}
                href="mailto:support@yourwebsite.com"
              >
                <EmailIcon className={classes.contactIcon} />
                <span className={classes.contactsDescription}>
                  support@yourwebsite.com
                </span>
              </a>
            </li>
            <li className={classes.contactsItem}>
              <a className={classes.contactsLink} href="/">
                <ClockIcon className={classes.contactIcon} />
                <span className={classes.contactsDescription}>
                  Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am
                  to 2pm
                </span>
              </a>
            </li>
          </ul>
          <ul className={classes.socialList}>
            <li className={classes.socialItem}>
              <a className={classes.socialLink} href="https://www.facebook.com">
                <FacebookIcon className={classes.socialIcon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a className={classes.socialLink} href="https://twitter.com">
                <TwitterIcon className={classes.socialIcon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                href="https://www.instagram.com"
              >
                <InstagramIcon className={classes.socialIcon} />
              </a>
            </li>
            <li className={classes.socialItem}>
              <a
                className={classes.socialLink}
                href="https://www.pinterest.com"
              >
                <PinterestIcon className={classes.socialIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalStorePage;
