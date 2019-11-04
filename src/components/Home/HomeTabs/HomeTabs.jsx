import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import products from '../../../constants/products';
import ProductCard from '../ProductCard/ProductCard';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    width: '85%',
    height: '100%',
    maxHeight: '1330px',
    margin: '0 auto',
    minWidth: '1170px',
    marginTop: '60px',
    padding: '60px 0',
    borderTop: '1px solid #eeeeee',
    borderBottom: '1px solid #eeeeee',
  },
  tabPanel: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  productCard: {
    width: '23.5%',
    height: '10%',
    marginRight: '2%',
    marginBottom: '2%',
    '&:nth-child(3n)': {
      marginRight: 0,
    },
    '&:nth-last-child(-n+3)': {
      marginBottom: 0,
    },
    '&:nth-child(3)': {
      width: '49%',
    },
    '&:nth-child(4)': {
      width: '49%',
      transform: 'translateY(-47%)',
    },
  },
});

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="popular" {...a11yProps(0)} />
          <Tab label="new arrivals" {...a11yProps(1)} />
          <Tab label="best sellers" {...a11yProps(2)} />
          <Tab label="special offers" {...a11yProps(3)} />
          <Tab label="Icoming soon" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={0}
          dir={theme.direction}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              className={classes.productCard}
              title={product.title}
              price={product.price}
              discount={product.discount}
              images={product.images}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={1}
          dir={theme.direction}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              className={classes.productCard}
              title={product.title}
              price={product.price}
              discount={product.discount}
              images={product.images}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={2}
          dir={theme.direction}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              className={classes.productCard}
              title={product.title}
              price={product.price}
              discount={product.discount}
              images={product.images}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={3}
          dir={theme.direction}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              className={classes.productCard}
              title={product.title}
              price={product.price}
              discount={product.discount}
              images={product.images}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={4}
          dir={theme.direction}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              className={classes.productCard}
              title={product.title}
              price={product.price}
              discount={product.discount}
              images={product.images}
            />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
