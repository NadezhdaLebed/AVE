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

const PinterestIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="56.693"
      width="56.693"
      viewBox="0 0 56.693 56.693"
    >
      <path d="M28.348 5.158c-13.599 0-24.625 11.023-24.625 24.625 0 10.082 6.063 18.744 14.739 22.553-.069-1.721-.012-3.783.429-5.654l3.168-13.418s-.787-1.572-.787-3.896c0-3.648 2.115-6.373 4.749-6.373 2.24 0 3.322 1.682 3.322 3.695 0 2.252-1.437 5.619-2.175 8.738-.616 2.613 1.31 4.744 3.887 4.744 4.665 0 7.808-5.992 7.808-13.092 0-5.397-3.635-9.437-10.246-9.437-7.47 0-12.123 5.57-12.123 11.792 0 2.146.633 3.658 1.624 4.83.455.537.519.754.354 1.371-.118.453-.389 1.545-.501 1.977-.164.625-.669.848-1.233.617-3.44-1.404-5.043-5.172-5.043-9.408 0-6.994 5.899-15.382 17.599-15.382 9.4 0 15.588 6.804 15.588 14.107 0 9.658-5.369 16.875-13.285 16.875-2.659 0-5.16-1.438-6.016-3.068 0 0-1.43 5.674-1.732 6.768-.522 1.9-1.545 3.797-2.479 5.275a24.595 24.595 0 006.979 1.01c13.598 0 24.623-11.023 24.623-24.623-.001-13.603-11.027-24.626-24.624-24.626z" />
    </SvgIcon>
  );
};

PinterestIcon.propTypes = propTypes;
PinterestIcon.defaultProps = defaultProps;

export default PinterestIcon;
