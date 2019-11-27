import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating/Rating';
import {
  ArrowsIcon,
  FacebookIcon,
  TwitterIcon,
  GoogleIcon,
  PinterestIcon,
  InstagramIcon,
  EmailIcon,
} from '../../ui-kit/Icons';
import Banner from '../../ui-kit/Banner/Banner';
import IconButton from '../../ui-kit/IconButton/IconButton';
import ProductSelector from '../../components/Product/ProductSelector/ProductSelector';
import defaultProduct from '../../constants/product';
import ProductTabs from '../../components/Product/ProductTabs/ProductTabs';

const propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    rating: PropTypes.number,
    views: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    availability: PropTypes.string,
    code: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
};

const defaultProps = {
  product: defaultProduct,
};

const useStyles = makeStyles({
  content: {
    display: 'flex',
    paddingTop: '63px',
  },
  img: {
    width: '570px',
    height: '710px',
  },
  information: {
    marginLeft: '30px',
  },
  title: {
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#575153',
    textTransform: 'uppercase',
  },
  reviews: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '29px',
  },
  rating: {
    fontSize: '16px',
    color: '#ded3aa',
    marginRight: '10px',
  },
  review: {
    fontSize: '14px',
    color: '#727272',
    marginRight: '10px',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    color: '#00c8c8',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderLeft: '1px solid #989898',
    borderRight: '1px solid #989898',
    marginRight: '10px',
  },
  share: {
    fontSize: '14px',
    color: '#8c8c8c',
    marginRight: '10px',
  },
  socialList: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
  socialItem: {
    marginRight: '15px',
    '&:last-child': {
      marginRight: '0px',
    },
  },
  icon: {
    fontSize: '14px',
    color: '#8c8c8c',
  },
  prices: {
    display: 'flex',
    marginTop: '27px',
    marginBottom: '35px',
  },
  price: {
    fontSize: '30px',
    fontWeight: '300',
    letterSpacing: '1.5px',
    color: '#9a9a9a',
  },
  priceLine: {
    textDecoration: 'line-through',
  },
  discount: {
    fontSize: '30px',
    fontWeight: '300',
    letterSpacing: '1.5px',
    color: '#9a9a9a',
    marginLeft: '15px',
  },
  relation: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    '&:nth-child(3n)': {
      marginBottom: '0px',
    },
  },
  relationTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#575153',
    textTransform: 'uppercase',
    marginRight: '8px',
  },
  relationText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    color: '#8c8c8c',
  },
  relationLink: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    color: '#00c8c8',
    marginRight: '3px',
    '&:last-child': {
      marginRight: '0px',
    },
  },
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '25px',
    '& ul': {
      transform: 'translate(17px, 15px)',
    },
  },
  productSelector: {
    marginTop: '35px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',
  },
  button: {
    marginRight: '26px',
    '&:last-child': {
      marginRight: '0px',
    },
  },
  compare: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  },
  compareLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#727272',
    marginRight: '13px',
  },
  compareIcon: {
    width: '15px',
    height: '16px',
    color: 'white',
  },
  compareText: {
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '2.8px',
    color: '#454647',
    textTransform: 'uppercase',
  },
});

const ProductPage = (props) => {
  const { product } = props;
  const classes = useStyles();
  const priceClassName = cn(classes.price, {
    [classes.priceLine]: product.discount,
  });

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="Product view"
        text="mens - casuals - hoodies &#38; sweatshirts - ave classic sweatshirt"
      />
      <div className="wrapper">
        <div className={classes.content}>
          <div className={classes.product}>
            <img
              className={classes.img}
              src={product.img}
              alt={product.title}
            />
          </div>
          <div className={classes.information}>
            <h1 className={classes.title}>{product.title}</h1>
            <div className={classes.reviews}>
              <Rating
                className={classes.rating}
                name="half-rating"
                value={product.rating}
                precision={0.5}
              />
              <p className={classes.review}>{`${product.views} Review(s)`}</p>
              <a className={classes.link} href="/" alt="add a review">
                Add a Review
              </a>
              <p className={classes.share}>Share:</p>
              <ul className={classes.socialList}>
                <li className={classes.socialItem}>
                  <a
                    className={classes.socialLink}
                    href="https://www.facebook.com"
                  >
                    <FacebookIcon className={classes.icon} />
                  </a>
                </li>
                <li className={classes.socialItem}>
                  <a className={classes.socialLink} href="https://twitter.com">
                    <TwitterIcon className={classes.icon} />
                  </a>
                </li>
                <li className={classes.socialItem}>
                  <a
                    className={classes.socialLink}
                    href="https://aboutme.google.com"
                  >
                    <GoogleIcon className={classes.icon} />
                  </a>
                </li>
                <li className={classes.socialItem}>
                  <a
                    className={classes.socialLink}
                    href="https://www.pinterest.com"
                  >
                    <PinterestIcon className={classes.icon} />
                  </a>
                </li>
                <li className={classes.socialItem}>
                  <a
                    className={classes.socialLink}
                    href="https://www.instagram.com"
                  >
                    <InstagramIcon className={classes.icon} />
                  </a>
                </li>
                <li className={classes.socialItem}>
                  <a
                    className={classes.socialLink}
                    href="https://www.google.com"
                  >
                    <EmailIcon className={classes.icon} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes.prices}>
              <p className={priceClassName}>{`£${product.price}`}</p>
              {product.discount && (
                <p className={classes.discount}>{`£${product.discount}`}</p>
              )}
            </div>
            <div className={classes.relation}>
              <p className={classes.relationTitle}>Availability: </p>
              <p className={classes.relationText}>{product.availability}</p>
            </div>
            <div className={classes.relation}>
              <p className={classes.relationTitle}>Product Code: </p>
              <p className={classes.relationText}>{`#${product.code}`}</p>
            </div>
            <div className={classes.relation}>
              <p className={classes.relationTitle}>Tags: </p>
              {product.tags.map((tag, index) => (
                <p className={classes.relationLink}>
                  {index + 1 === product.tags.length ? tag : `${tag},`}
                </p>
              ))}
            </div>
            <div className={classes.description}>
              {parse(product.description)}
            </div>
            <ProductSelector className={classes.productSelector} />
            <div className={classes.buttons}>
              <IconButton
                className={classes.button}
                text="Add to Cart"
                icon={<ShoppingCartIcon />}
              />
              <IconButton
                className={classes.button}
                text="Add to LookBook"
                icon={<FavoriteBorderIcon />}
              />
            </div>
            <div className={classes.compare}>
              <a className={classes.compareLink} href="/">
                <ArrowsIcon className={classes.compareIcon} />
              </a>
              <p className={classes.compareText}>Add to Compare</p>
            </div>
          </div>
        </div>
        <ProductTabs heading={product.heading} description={product.text} />
      </div>
    </div>
  );
};

ProductPage.propTypes = propTypes;
ProductPage.defaultProps = defaultProps;

export default ProductPage;
