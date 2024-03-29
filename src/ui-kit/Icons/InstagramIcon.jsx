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

const InstagramIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="56.693"
      width="56.693"
      viewBox="0 0 56.693 56.693"
    >
      <path d="M43.414 4.831H13c-5.283 0-9.581 4.297-9.581 9.58v30.415c0 5.283 4.298 9.58 9.581 9.58h30.415c5.283 0 9.58-4.297 9.58-9.58V14.41c-.001-5.283-4.298-9.579-9.581-9.579zm2.748 5.713l1.096-.004v8.403l-8.375.027-.029-8.402 7.308-.024zM21.131 24.53c1.588-2.197 4.164-3.638 7.076-3.638s5.488 1.441 7.074 3.638a8.677 8.677 0 011.652 5.088c0 4.811-3.918 8.725-8.727 8.725-4.812 0-8.726-3.914-8.726-8.725a8.683 8.683 0 011.651-5.088zm27.033 20.295a4.754 4.754 0 01-4.75 4.75H13a4.755 4.755 0 01-4.751-4.75V24.53h7.4a13.483 13.483 0 00-.998 5.088c0 7.473 6.08 13.557 13.556 13.557 7.475 0 13.555-6.084 13.555-13.557 0-1.799-.361-3.516-1-5.088h7.402v20.295z" />
    </SvgIcon>
  );
};

InstagramIcon.propTypes = propTypes;
InstagramIcon.defaultProps = defaultProps;

export default InstagramIcon;
