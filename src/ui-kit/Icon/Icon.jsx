import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  name: PropTypes.shape({
    id: PropTypes.string,
    viewBox: PropTypes.string,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
};

const defaultProps = {
  name: {},
  className: '',
};

const useStyles = makeStyles({
  icon: {
    display: 'inline-block',
    flexShrink: 0,
    width: '100%',
    height: '100%',
    color: 'inherit',
    fill: 'currentColor',
  },
});

const Icon = (props) => {
  const { name, className } = props;
  const classes = useStyles();

  return (
    <svg className={cn(classes.icon, className)}>
      <use xlinkHref={`#${name.id}`} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;