import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavigationItem from '../../ui-kit/NavigationItem/NavigationItem';
import SearchBox from '../../ui-kit/SearchBox/SearchBox';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    paddingTop: '38px',
  },
  wrapper: {
    width: '85%',
    minWidth: '1170px',
    margin: '0 auto',
    display: 'inherit',
    flexDirection: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  logoLink: {
    fontSize: '24px',
    letterSpacing: '1.2px',
    color: '#222222',
    textDecoration: 'none',
    textTransform: 'uppercase',
    zIndex: 1,
  },
  list: {
    display: 'flex',
    alignItems: 'flex-start',
    listStyle: 'none',
  },
  item: {
    marginLeft: '50px',
    zIndex: 1,
    '&:first-child': {
      marginLeft: '0',
    },
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <a className={classes.logoLink} href="/">
          <b>avenue</b> fashion
        </a>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavigationItem
              text="mens"
              path="/"
              isHover
              items={[
                {
                  title: 'casuals',
                  items: [
                    { label: 'Jackets', path: '/' },
                    { label: 'Hoodies & Sweatshirts', path: '/' },
                    { label: 'Polo Shirts', path: '/' },
                    { label: 'Sportswear', path: '/' },
                    { label: 'Trousers & Chinos', path: '/' },
                    { label: 'T-Shirts', path: '/' },
                  ],
                },
                {
                  title: 'formal',
                  items: [
                    { label: 'Jackets', path: '/' },
                    { label: 'Shirts', path: '/' },
                    { label: 'Suits', path: '/' },
                    { label: 'Trousers', path: '/' },
                  ],
                },
              ]}
            />
          </li>
          <li className={classes.item}>
            <NavigationItem
              text="womens"
              path="/"
              isHover
              items={[
                {
                  title: 'casuals',
                  items: [
                    { label: 'Jackets', path: '/' },
                    { label: 'Hoodies & Sweatshirts', path: '/' },
                    { label: 'Polo Shirts', path: '/' },
                    { label: 'Sportswear', path: '/' },
                    { label: 'Trousers & Chinos', path: '/' },
                    { label: 'T-Shirts', path: '/' },
                  ],
                },
                {
                  title: 'formal',
                  items: [
                    { label: 'Jackets', path: '/' },
                    { label: 'Shirts', path: '/' },
                    { label: 'Suits', path: '/' },
                    { label: 'Trousers', path: '/' },
                  ],
                },
              ]}
            />
          </li>
          <li className={classes.item}>
            <NavigationItem text="the brand" path="/" />
          </li>
          <li className={classes.item}>
            <NavigationItem text="local stores" path="/" />
          </li>
          <li className={classes.item}>
            <NavigationItem
              text="look book"
              path="/"
              isHover
              items={[
                {
                  title: 'Our Lookbooks',
                  items: [
                    { label: 'Latest Posts (mixed)', path: '/' },
                    { label: 'Men’s Lookbook', path: '/' },
                    { label: 'Women’s Lookbook', path: '/' },
                  ],
                },
                {
                  title: 'Your Lookbook',
                  items: [
                    { label: 'View and Edit', path: '/' },
                    { label: 'Share', path: '/' },
                    { label: 'Delete', path: '/' },
                  ],
                },
              ]}
            />
          </li>
        </ul>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navigation;
