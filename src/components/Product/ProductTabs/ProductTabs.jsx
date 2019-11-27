import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';

const propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `product-tab-${index}`,
    'aria-controls': `product-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    width: '85%',
    margin: '0 auto',
    minWidth: '1170px',
    marginTop: '60px',
    marginBottom: '125px',
  },
  tabPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '26px',
  },
  appBar: {
    height: '50px',
    backgroundColor: '#f8f8f8',
    border: 0,
    boxShadow: 'none',
  },
  tabs: {
    fontSize: '16px',
    lineHeight: '1.54',
    color: '#575153',
  },
  tab: {
    padding: '0 20px',
    minWidth: 'auto',
    opacity: 1,
    minHeight: '50px',
    marginRight: '65px',
  },
  selected: {
    color: 'white',
    backgroundColor: '#333333',
  },
  heading: {
    fontSize: '13px',
    lineHeight: '1.54',
    color: '#727272',
    textTransform: 'uppercase',
    padding: '0 20px',
  },
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#8e8c8c',
    marginTop: '18px',
    padding: '0 20px',
    '& p': {
      marginBottom: '30px',
      '&:last-child': {
        marginBottom: '0px',
      },
    },
  },
});

export default function ProductTabs(props) {
  const { heading, description } = props;
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
          indicatorColor="none"
        >
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="Description"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="Video"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="Size &#38; Specs"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="Delivery &#38; Returns"
            {...a11yProps(3)}
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            label="Reviews"
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
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{parse(description)}</div>
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={1}
          dir={theme.direction}
        >
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{parse(description)}</div>
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={2}
          dir={theme.direction}
        >
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{parse(description)}</div>
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={3}
          dir={theme.direction}
        >
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{parse(description)}</div>
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={4}
          dir={theme.direction}
        >
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{parse(description)}</div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

ProductTabs.propTypes = propTypes;
