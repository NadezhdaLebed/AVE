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

const ArrowsIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="15"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M8 2.008l1.497 1.495L13 0l3 3-3.501 3.501L14 8H8zm0 11.984l-1.497-1.495L3 16l-3-3 3.501-3.501L2 8h6zm0 0" />
    </SvgIcon>
  );
};

ArrowsIcon.propTypes = propTypes;
ArrowsIcon.defaultProps = defaultProps;

export default ArrowsIcon;
