import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { InfoIcon, FavoriteIcon } from '../../../ui-kit/Icons';

const propTypes = {
  model: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
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
    marginRight: '30px',
    marginBottom: '30px',
    '&:hover': {
      boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.14)',
      '& $icons': {
        opacity: 1,
      },
    },
  },
  model: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    fontSize: '21px',
    fontWeight: '300',
    letterSpacing: '1.05px',
    color: '#9a9a9a',
    textTransform: 'uppercase',
  },
  img: {
    width: '420px',
    height: '500px',
  },
  icons: {
    position: 'absolute',
    top: '304px',
    left: '150px',
    display: 'flex',
    transition: 'all 0.3s ease',
    opacity: 0,
  },
  info: {
    width: '42px',
    height: '42px',
    color: '#ffffff',
    marginRight: '30px',
  },
  favorite: {
    width: '42px',
    height: '42px',
    color: '#ffffff',
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const { model, img } = props;

  return (
    <div className={classes.container}>
      <p className={classes.model}>{`ref${model}`}</p>
      <img className={classes.img} src={img} alt={`product-${model}`} />
      <div className={classes.icons}>
        <InfoIcon className={classes.info} />
        <FavoriteIcon className={classes.favorite} />
      </div>
    </div>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;
