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

const EmailIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="32"
      width="32"
      viewBox="0 0 32 32"
    >
      <path d="M25.12 6H6.88A3.89 3.89 0 003 9.89v11.22A3.89 3.89 0 006.88 25h18.24A3.89 3.89 0 0029 21.11V9.89A3.89 3.89 0 0025.12 6zm0 2h.16L16 14.76 6.72 8h.16zM27 21.11A1.89 1.89 0 0125.12 23H6.88A1.89 1.89 0 015 21.11V9.89a1.92 1.92 0 01.1-.59l10.32 7.51a1 1 0 001.18 0L26.91 9.3a1.92 1.92 0 01.1.59z" />
    </SvgIcon>
  );
};

EmailIcon.propTypes = propTypes;
EmailIcon.defaultProps = defaultProps;

export default EmailIcon;
