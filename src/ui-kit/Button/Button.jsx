import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
};

const defaultProps = {
  className: '',
  to: '',
};

const useStyles = makeStyles({
  button: {
    border: 'solid 2px #737373',
    backgroundColor: 'transparent',
    color: '#454647',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    letterSpacing: '3.2px',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '23px 33px',
    outline: 'none',
    '&:hover': {
      backgroundColor: '#00c8c8',
      color: 'white',
      border: 'solid 2px #00c8c8',
    },
  },
  link: {
    border: 'solid 2px #737373',
    backgroundColor: 'transparent',
    color: '#454647',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    letterSpacing: '3.2px',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '23px 33px',
    '&:hover': {
      backgroundColor: '#00c8c8',
      color: 'white',
      border: 'solid 2px #00c8c8',
    },
  },
});

const Button = (props) => {
  const classes = useStyles();
  const { className, children, to } = props;

  return (
    <React.Fragment>
      {to !== '' ? (
        <Link to={to} className={cn(classes.link, className)}>
          {children}
        </Link>
      ) : (
        <button type="button" className={cn(classes.button, className)}>
          {children}
        </button>
      )}
    </React.Fragment>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
