import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';

const propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 2px #737373',
    backgroundColor: 'transparent',
    color: '#454647',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '15px 33px',
    outline: 'none',
    '&:hover': {
      backgroundColor: '#333333',
      color: 'white',
      border: 'solid 2px #333333',
    },
  },
  icon: {
    width: '18px',
    height: '36px',
    transform: 'translateY(5px)',
    marginRight: '12px',
  },
  text: {
    fontSize: '16px',
    letterSpacing: '3.2px',
    textTransform: 'uppercase',
  },
});

const IconButton = (props) => {
  const classes = useStyles();
  const { className, icon, text } = props;

  return (
    <button type="button" className={cn(classes.button, className)}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.text}>{text}</span>
    </button>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
