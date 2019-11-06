import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { makeStyles, SvgIcon } from '@material-ui/core';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  icon: {
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
  },
});

const LocationIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M3.02 6A6.124 6.124 0 013 5.5C3 2.462 5.239 0 8 0s5 2.462 5 5.5c0 .169-.007.335-.02.5H13c0 3.006-5 10-5 10S3 9.022 3 6zM8 7a2 2 0 100-4 2 2 0 000 4zm0 0" />
    </SvgIcon>
  );
};

LocationIcon.propTypes = propTypes;
LocationIcon.defaultProps = defaultProps;

export default LocationIcon;
