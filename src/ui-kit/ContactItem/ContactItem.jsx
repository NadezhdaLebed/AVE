import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';

const propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};

const defaultProps = {
  title: '',
  items: [],
  className: '',
};

const useStyles = makeStyles({
  list: {
    listStyle: 'none',
  },
  title: {
    fontSize: '13px',
    lineHeight: '1.54',
    textTransform: 'uppercase',
    color: '#575153',
    marginBottom: '33px',
  },
  item: {
    marginBottom: '6px',
    '&:last-child': {
      marginBottom: '0',
    },
  },
  link: {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '2.14',
    color: '#727272',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00c8c8',
    },
  },
});

const ContactItem = (props) => {
  const classes = useStyles();
  const { title, items, className } = props;

  return (
    <ul className={cn(classes.list, className)}>
      <h3 className={classes.title}>{title}</h3>
      {items.map((item) => (
        <li key={item.label} className={classes.item}>
          <a href={item.path} className={classes.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

ContactItem.propTypes = propTypes;
ContactItem.defaultProps = defaultProps;

export default ContactItem;
