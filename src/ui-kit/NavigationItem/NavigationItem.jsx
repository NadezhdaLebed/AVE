import React from 'react';
import { makeStyles, Popper, Fade } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ArrowIcon from '@material-ui/icons/ExpandMore';
import ContactItem from '../ContactItem/ContactItem';

const propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isHover: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          path: PropTypes.string,
        }),
      ),
    }),
  ),
  path: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
  isHover: false,
  items: [],
};

const useStyles = makeStyles({
  link: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    paddingTop: '10px',
    '&:hover': {
      '& $text': {
        color: '#00c8c8',
      },
      '& $icon': {
        color: '#00c8c8',
        transform: 'rotate(180deg)',
      },
    },
  },
  text: {
    fontSize: '13px',
    lineHeight: '1.54',
    textTransform: 'uppercase',
    color: '#222222',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '13px',
    color: '#989898',
    transform: 'translateX(-2px)',
    transition: 'all 0.3s ease',
  },
  paper: {
    boxShadow: '0px 17px 24px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: '#f8f8f8',
    padding: '30px',
  },
  container: {
    display: 'flex',
  },
  promotion: {
    fontSize: '36px',
    lineHeight: '1.33',
    letterSpacing: '1.8px',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#333333',
    padding: '63px 53px',
    marginTop: '62px',
  },
  contactItem: {
    width: '50%',
    marginRight: '50px',
    '&:last-child': {
      marginRight: '0',
    },
  },
});

const NavigationItem = (props) => {
  const classes = useStyles();
  const { text, className, isHover, items, path } = props;
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const id = open ? 'hover-menu' : undefined;

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Link
        to={path}
        className={cn(classes.link, className)}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        aria-describedby={id}
      >
        <span className={classes.text}>{text}</span>
        {isHover && <ArrowIcon className={classes.icon} />}
      </Link>
      <Popper id={id} open={open && isHover} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <div className={classes.paper}>
              <div className={classes.container}>
                {items.map((item) => (
                  <ContactItem
                    className={classes.contactItem}
                    key={item.title}
                    title={item.title}
                    items={item.items}
                  />
                ))}
              </div>
              <p className={classes.promotion}>
                <b>Autumn sale!</b>
                <br />
                up to 50% off
              </p>
            </div>
          </Fade>
        )}
      </Popper>
    </React.Fragment>
  );
};

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;
