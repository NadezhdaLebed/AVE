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

const GoogleIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="56.693"
      width="56.693"
      viewBox="0 0 56.693 56.693"
    >
      <path d="M19.667 25.787c-.007 1.793 0 3.587.008 5.38 3.006.098 6.02.053 9.027.098-1.326 6.669-10.399 8.832-15.199 4.476-4.936-3.82-4.702-12.2.43-15.749 3.587-2.864 8.688-2.155 12.275.324 1.41-1.304 2.728-2.698 4.001-4.144-2.984-2.382-6.646-4.077-10.542-3.896-8.13-.272-15.606 6.85-15.741 14.98-.52 6.646 3.85 13.165 10.022 15.516 6.149 2.366 14.03.753 17.957-4.77 2.592-3.49 3.15-7.98 2.848-12.2-5.034-.038-10.06-.03-15.086-.015zM49.07 25.764c-.015-1.5-.022-3.007-.03-4.506h-4.483c-.015 1.5-.03 2.999-.038 4.506-1.507.008-3.007.015-4.506.03v4.484l4.506.045c.015 1.5.015 3 .03 4.499h4.491c.008-1.5.015-3 .03-4.506 1.507-.015 3.007-.023 4.507-.038v-4.484c-1.5-.015-3.007-.015-4.507-.03z" />
    </SvgIcon>
  );
};

GoogleIcon.propTypes = propTypes;
GoogleIcon.defaultProps = defaultProps;

export default GoogleIcon;