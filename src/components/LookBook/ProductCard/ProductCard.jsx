import React from 'react';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { InfoIcon, FavoriteIcon } from '../../../ui-kit/Icons';

const propTypes = {
  model: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
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
    fontSize: '15px',
    fontWeight: '300',
    letterSpacing: '1.05px',
    color: '#9a9a9a',
    textTransform: 'uppercase',
  },
  img: {
    width: '100%',
    height: '100%',
    maxHeight: '360px',
  },
  icons: {
    position: 'absolute',
    top: '230px',
    left: '105px',
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
  const { model, img, className } = props;

  return (
    <div className={cn(classes.container, className)}>
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
ProductCard.defaultProps = defaultProps;

export default ProductCard;
