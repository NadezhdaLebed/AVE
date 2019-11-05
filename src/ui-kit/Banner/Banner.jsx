import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    backgroundImage: 'url(../../assets/png/banner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.75',
    width: '100%',
    height: '450px',
    zIndex: '0',
    '&:after': {
      content: 'close-quote',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .75)',
    },
  },
  title: {
    position: 'absolute',
    bottom: '-113px',
    fontSize: '450px',
    fontWeight: 'bold',
    letterSpacing: '22.5px',
    textAlign: 'center',
    color: '#f8f8f8',
    opacity: '0.05',
    zIndex: '1',
  },
  heading: {
    fontSize: '48px',
    fontWeight: '300',
    lineHeight: '1.13',
    letterSpacing: '2.4px',
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
    zIndex: '1',
  },
  text: {
    fontSize: '30px',
    lineHeight: '1.8',
    letterSpacing: '1.5px',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '52px',
    textTransform: 'uppercase',
    zIndex: '1',
  },
});

const propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Banner = (props) => {
  const classes = useStyles();
  const { heading, text } = props;
  const words = heading.split(' ');

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>AVE</h1>
      <h2 className={classes.heading}>
        <b>{words[0]}</b> {words[1]}
      </h2>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

Banner.propTypes = propTypes;

export default Banner;
