import React from 'react';
import { makeStyles, MenuItem, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  selector: {
    marginRight: '30px',
    '&:last-child': {
      marginRight: '0px',
    },
  },
  title: {
    fontSize: '13px',
    lineHeight: '2.31',
    color: '#575153',
    textTransform: 'uppercase',
  },
  select: {
    width: '170px',
    height: '35px',
  },
  textField: {
    width: '70px',
    height: '35px',
  },
});

const ProductSelector = (props) => {
  const classes = useStyles();
  const { className } = props;
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className={cn(classes.container, className)}>
      <div className={classes.selector}>
        <h2 className={classes.title}>Colour</h2>
        <TextField
          select
          className={classes.select}
          value={color}
          onChange={handleChangeColor}
          variant="outlined"
          inputProps={{
            placeholder: 'Select color',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>White</MenuItem>
          <MenuItem value={20}>Grey</MenuItem>
          <MenuItem value={30}>Black</MenuItem>
        </TextField>
      </div>
      <div className={classes.selector}>
        <h2 className={classes.title}>Size</h2>
        <TextField
          select
          className={classes.select}
          value={size}
          onChange={handleChangeSize}
          variant="outlined"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>XS</MenuItem>
          <MenuItem value={20}>S</MenuItem>
          <MenuItem value={30}>M</MenuItem>
          <MenuItem value={40}>L</MenuItem>
          <MenuItem value={50}>XL</MenuItem>
        </TextField>
      </div>
      <div className={classes.selector}>
        <h2 className={classes.title}>Qty</h2>
        <TextField
          type="number"
          className={classes.textField}
          variant="outlined"
        />
      </div>
    </div>
  );
};

ProductSelector.propTypes = propTypes;
ProductSelector.defaultProps = defaultProps;

export default ProductSelector;
