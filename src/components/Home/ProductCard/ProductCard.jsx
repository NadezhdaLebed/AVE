import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';
import InfoIcon from '../../../ui-kit/Icons/InfoIcon';
import ArrowsIcon from '../../../ui-kit/Icons/ArrowsIcon';
import { FavoriteBorder, ShoppingCart } from '@material-ui/icons';

const propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  discount: null,
  className: '',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.14)',
      '& $images': {
        opacity: 1,
      },
      '& $info': {
        opacity: 1,
      },
      '& $information': {
        bottom: '-223px',
        opacity: '1',
        zIndex: '1',
      },
    },
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
    position: 'absolute',
    top: '16px',
    right: '16px',
    display: 'flex',
    flexDirection: 'column',
    opacity: '0',
    transition: 'all 0.3s ease',
  },
  smallImg: {
    width: '80px',
    height: '100px',
    border: 'solid 1px #ffffff',
    marginTop: '17px',
    '&:first-child': {
      marginTop: '0px',
    },
  },
  info: {
    position: 'absolute',
    opacity: '0',
    width: '42px',
    height: '42px',
    color: 'white',
    transition: 'all 0.3s ease',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    height: '250px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    opacity: '0',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    padding: '22px 55px',
  },
  title: {
    fontSize: '13px',
    lineHeight: '1.54',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#727272',
  },
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    textAlign: 'center',
    marginTop: '19px',
    color: '#8e8c8c',
  },
  infoList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    marginTop: 'auto',
  },
  infoItem: {
    display: 'flex',
    marginLeft: '20px',
    '&:first-child': {
      marginLeft: '0px',
    },
  },
  infoLink: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#727272',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: '#00c8c8',
    },
  },
  infoIcon: {
    width: '18px',
    height: '16px',
    transform: 'translateY(5px)',
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const { price, discount, images, title, className, description } = props;
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
      <InfoIcon className={classes.info} />
      <div className={classes.information}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
        <ul className={classes.infoList}>
          <li className={classes.infoItem}>
            <a className={classes.infoLink} href="/">
              <ShoppingCart className={classes.infoIcon} />
            </a>
          </li>
          <li className={classes.infoItem}>
            <a className={classes.infoLink} href="/">
              <FavoriteBorder className={classes.infoIcon} />
            </a>
          </li>
          <li className={classes.infoItem}>
            <a className={classes.infoLink} href="/">
              <ArrowsIcon className={classes.infoIcon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;
