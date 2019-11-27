import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Typography } from '@material-ui/core';

const propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.instanceOf(object).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <Typography
      component="div"
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;
