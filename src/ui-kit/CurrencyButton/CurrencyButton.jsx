import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import Arrow from '@material-ui/icons/ExpandMore';
import { invokeAll } from '../../helpers/functions';

const propTypes = {
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
    backgroundColor: 'transparent',
    border: '0',
    cursor: 'pointer',
    outline: 'none',
  },
  text: {
    fontSize: '13px',
    lineHeight: '1.62',
    color: '#777777',
  },
  arrow: {
    fontSize: 10,
    color: '#777777',
    marginLeft: '10px',
    transition: 'transform 0.3s ease',
  },
  arrowOpen: {
    transform: 'rotate(180deg)',
  },
  menu: {
    top: '45px !important',
    backgroundColor: '#333333',
    color: '#777777',
  },
});

const CurrencyButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currency, setCurrency] = React.useState('GBP');
  const classes = useStyles();
  const { className } = props;
  const arrowClassName = cn(classes.arrow, {
    [classes.arrowOpen]: Boolean(anchorEl),
  });

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCurrency = (curr) => {
    setCurrency(curr);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={cn(classes.button, className)}
        onClick={handleOpen}
        aria-controls="currency"
        aria-haspopup="true"
      >
        <p className={classes.text}>{`Currency : ${currency}`}</p>
        <Arrow className={arrowClassName} />
      </button>
      <Menu
        id="currency"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
      >
        <MenuItem
          className={classes.item}
          onClick={invokeAll(handleClose, () => handleCurrency('GBP'))}
        >
          GBP
        </MenuItem>
        <MenuItem
          className={classes.item}
          onClick={invokeAll(handleClose, () => handleCurrency('EUR'))}
        >
          EUR
        </MenuItem>
        <MenuItem
          className={classes.item}
          onClick={invokeAll(handleClose, () => handleCurrency('USD'))}
        >
          USD
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

CurrencyButton.propTypes = propTypes;
CurrencyButton.defaultProps = defaultProps;

export default CurrencyButton;
