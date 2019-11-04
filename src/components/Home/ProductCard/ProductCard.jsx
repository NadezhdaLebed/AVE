import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';

const propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  discount: null,
  className: '',
};

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.14)',
  },
  prices: {
    display: 'flex',
    position: 'absolute',
    top: '15px',
    left: '15px',
  },
  price: {
    fontSize: '21px',
    fontWeight: '300',
    letterSpacing: '1.05px',
    color: '#9a9a9a',
  },
  priceLine: {
    textDecoration: 'line-through',
  },
  discount: {
    fontSize: '21px',
    fontWeight: '300',
    letterSpacing: '1.05px',
    color: '#9a9a9a',
    marginLeft: '10px',
  },
  mainImg: {
    width: '100%',
    height: '100%',
  },
  images: {
    flexDirection: 'column',
    display: 'none',
  },
  smallImg: {
    width: '80px',
    height: '100px',
    border: 'solid 1px #ffffff',
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const { price, discount, images, title, className } = props;
  const priceClassName = cn(classes.price, {
    [classes.priceLine]: discount,
  });

  return (
    <div className={cn(classes.container, className)}>
      <div className={classes.prices}>
        <p className={priceClassName}>{`£${price}`}</p>
        {discount && <p className={classes.discount}>{`£${discount}`}</p>}
      </div>
      <img className={classes.mainImg} src={images[0]} alt={title} />
      <div className={classes.images}>
        <img className={classes.smallImg} src={images[0]} alt={title} />
        <img className={classes.smallImg} src={images[1]} alt={title} />
      </div>
    </div>
  );
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;
