import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../../ui-kit/Banner/Banner';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: '63px',
    width: '48.7%',
    maxHeight: '1180px',
    marginBottom: '124px',
  },
  img: {
    width: '100%',
    height: '100%',
    marginTop: '62px',
    '&:first-child': {
      marginTop: '0px',
      marginRight: '10%',
    },
  },
  title: {
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#575153',
    textTransform: 'uppercase',
    marginTop: '29px',
    maxWidth: '100%',
  },
  subtitle: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
    maxWidth: '100%',
    textTransform: 'uppercase',
    marginTop: '29px',
  },
  text: {
    maxWidth: '100%',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '19px',
  },
  link: {
    textDecoration: 'none',
    color: '#00c8c8',
    '&:hover': {
      '& $linkArrow': {
        marginLeft: '3px',
      },
    },
  },
  linkArrow: {
    transition: 'all 0.3s ease',
  },
  list: {
    display: 'flex',
    maxWidth: '100%',
    listStyle: 'none',
    marginTop: '71px',
  },
  item: {
    marginRight: '40px',
    '&:last-child': {
      marginRight: '0px',
    },
  },
  linkLogo: {},
  imgLogo: {
    width: '100%',
    height: '100%',
  },
});

const BrandPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="the brand"
        text="company slogan goes here"
      />
      <div className="wrapper">
        <div className={classes.content}>
          <img
            className={classes.img}
            src="../assets/png/brand1.png"
            alt="brand img"
          />
          <img
            className={classes.img}
            src="../assets/png/brand2.png"
            alt="brand img"
          />
          <h2 className={classes.title}>our values, vision and strategy</h2>
          <h3 className={classes.subtitle}>
            The above image would be a great place for an advertising video
          </h3>
          <p className={classes.text}>
            Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac
            facilisis quam ornare aliquam. Etiam cursus odio vitae dui
            dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus
            eu nulla a, molestie tempus mi maecenas sagittis ornare.
            Pellentesque sapien mi,{' '}
            <a className={classes.link} href="/">
              tincidunt nec magna vitae
            </a>
            , volutpat elementum odioni lorem Aliquam tempor massa vitae augue
            mattis tempor id in ante ut augue erat, luctus eil.
          </p>
          <h2 className={classes.title}>hand designed clothing</h2>
          <h3 className={classes.subtitle}>
            established in 2013, avenue fashion Sed dictum elit vel sapien
            luctus eras
          </h3>
          <p className={classes.text}>
            Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam
            vestibulim consectetur, id condimentum leo porttitor. Cum sociis
            natoque penatibus eta magnis disut parturient montes, nascetur
            ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum
            sodales nibh suspendisse congue metus nunc, id viverra elit loreti
            rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium
            justo interdum.
          </p>
          <img
            className={classes.img}
            src="../assets/png/brand3.png"
            alt="brand img"
          />
          <h2 className={classes.title}>Ethical trading</h2>
          <h3 className={classes.subtitle}>
            we oversee the working conditions of the people in the supply chain
          </h3>
          <p className={classes.text}>
            Nullam dapibus consectetur neque, faucibus porttitor purus iaculis
            sed. Aenean eras dapibus augue, eget dignissim dui maecenas et
            rhoncus mim, vel semper arcu lorem. Pellentesque congue justo esteir
            pellentesque aliquet massa eget posuere tincidunt. Cras viverra
            ullamcorper nunc accumsan hendrerit.{' '}
            <a className={classes.link} href="/">
              A link <span className={classes.linkArrow}>&#8594;</span>
            </a>
          </p>
          <ul className={classes.list}>
            <li className={classes.item}>
              <a className={classes.linkLogo} href="/">
                <img
                  className={classes.imgLogo}
                  src="../assets/png/logo1.png"
                  alt="logo img"
                />
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.linkLogo} href="/">
                <img
                  className={classes.imgLogo}
                  src="../assets/png/logo2.png"
                  alt="logo img"
                />
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.linkLogo} href="/">
                <img
                  className={classes.imgLogo}
                  src="../assets/png/logo3.png"
                  alt="logo img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
