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

const FavoriteIcon = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <SvgIcon
      className={cn(classes.icon, className)}
      height="48"
      width="48"
      viewBox="0 0 48 48"
    >
      <path d="M30.083 17.269c-.528 0-1.019.143-1.447.384h-.001a3.182 3.182 0 00-.384.253l-.004-.006-.045.038-.054.045-.287.241a46.844 46.844 0 00-2.472 2.003l-.04.03c-.979.83-1.816 0-1.816 0l-2.455-2.296-.003.006a3.667 3.667 0 00-2.68-1.167 3.688 3.688 0 00-3.688 3.688c0 .872.315 1.663.821 2.294l-.014.006s2.249 2.71 4.559 4.726l.014.01c2.266 2.176 4.287 3.453 4.287 3.453 5.719-3.719 8.332-9.135 8.332-9.135l-.008-.002c.265-.451.427-.969.427-1.529a3.042 3.042 0 00-3.042-3.042z" />
      <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm12.042 20.779l-.005.022a5.977 5.977 0 01-.588 1.954.895.895 0 01-.021.055c-.161.43-1.464 3.576-6.565 8.205a33.697 33.697 0 01-4.488 3.164c-1.424-.994-2.769-1.918-4.006-2.793-1.078-.764-3.816-3.527-5.521-5.283-1.17-1.193-1.747-2.178-1.973-2.619-.037-.083-.083-.168-.119-.251a6.246 6.246 0 01-.842-3.131l.001-.02-.001-.015a6.283 6.283 0 016.281-6.247c1.876 0 3.544.835 4.693 2.14.019.016.035.018.056.039.221.229.536.619.814.974h.001s.621.688 1.1 0c.016-.022.024-.024.038-.042 1.062-1.738 2.96-2.907 5.146-2.907a6.043 6.043 0 016.043 6.043 5.951 5.951 0 01-.044.712z" />
    </SvgIcon>
  );
};

FavoriteIcon.propTypes = propTypes;
FavoriteIcon.defaultProps = defaultProps;

export default FavoriteIcon;
