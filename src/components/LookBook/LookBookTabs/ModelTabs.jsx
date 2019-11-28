import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import models from '../../../constants/models';
import ProductCard from '../ProductCard/ProductCard';
import WomenLookBook from '../WomenLookBook/WomenLookBook';
import WinLookBook from '../WinLookBook/WinLookBook';

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
    maxHeight: '1400px',
    margin: '0 auto',
    minWidth: '1170px',
    marginTop: '60px',
    padding: '54px 0',
    borderTop: '1px solid #eeeeee',
    borderBottom: '1px solid #eeeeee',
  },
  tabPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '58px',
  },
  productCard: {
    width: '23.5%',
    height: '10%',
    marginRight: '2%',
    marginBottom: '2%',
    '&:nth-child(7n)': {
      marginRight: '0',
    },
    '&:last-child': {
      marginLeft: '2%',
      marginRight: '0',
    },
  },
  appBar: {
    height: '22px',
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
  },
  tabs: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
  },
  tab: {
    padding: 0,
    minWidth: 'auto',
    opacity: 1,
    minHeight: '22px',
    marginRight: '50px',
  },
  selected: {
    color: '#00c8c8',
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
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs
          classes={{ root: classes.tabs }}
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
          indicatorColor="none"
        >
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="latest"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="most liked"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="best sellers"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="price low to high"
            {...a11yProps(3)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="price high to low"
            {...a11yProps(4)}
          />
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
          {models.map((model) => {
            if (model.type) {
              if (model.type === 'women') {
                return <WomenLookBook />;
              }
              return <WinLookBook />;
            }
            return (
              <ProductCard
                key={model.id}
                className={classes.productCard}
                model={model.model}
                img={model.img}
              />
            );
          })}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={1}
          dir={theme.direction}
        >
          {models.map((model) => (
            <ProductCard
              key={model.id}
              className={classes.productCard}
              model={model.model}
              img={model.img}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={2}
          dir={theme.direction}
        >
          {models.map((model) => (
            <ProductCard
              key={model.id}
              className={classes.productCard}
              model={model.model}
              img={model.img}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={3}
          dir={theme.direction}
        >
          {models.map((model) => (
            <ProductCard
              key={model.id}
              className={classes.productCard}
              model={model.model}
              img={model.img}
            />
          ))}
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={4}
          dir={theme.direction}
        >
          {models.map((model) => (
            <ProductCard
              key={model.id}
              className={classes.productCard}
              model={model.model}
              img={model.img}
            />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
