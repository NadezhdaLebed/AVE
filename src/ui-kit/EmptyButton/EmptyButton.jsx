import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';
import { ShoppingCart, ExpandMore } from '@material-ui/icons';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  button: {
    backgroundColor: '#00c8c8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    cursor: 'pointer',
    padding: '15px 22px 14px 22px',
  },
  basket: {
    width: '20px',
    height: '17px',
    color: '#ffffff',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '22px',
  },
  text: {
    fontSize: '13px',
    lineHeight: '1.62',
    color: '#ffffff',
  },
  arrow: {
    fontSize: 10,
    color: '#ffffff',
    marginLeft: '10px',
  },
});

const EmptyButton = (props) => {
  const classes = useStyles();
  const { className } = props;

  return (
    <button type="button" className={cn(classes.button, className)}>
      <ShoppingCart className={classes.basket} />
      <span className={classes.container}>
        <p className={classes.text}>empty</p>
        <ExpandMore className={classes.arrow} />
      </span>
    </button>
  );
};

EmptyButton.propTypes = propTypes;
EmptyButton.defaultProps = defaultProps;

export default EmptyButton;
