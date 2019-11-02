import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';
import Button from '../Button/Button';

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyle = makeStyles({
  container: {
    width: '32%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: '43px 40px 0px 9px',
  },
  img: {
    minWidth: '210px',
    height: '380px',
  },
  lookBook: {
    textAlign: 'right',
  },
  title: {
    fontSize: '35px',
    fontWeight: '300',
    lineHeight: '1.13',
    letterSpacing: '2.4px',
    textTransform: 'uppercase',
    color: '#575153',
  },
  text: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    lineHeight: '1.47',
    color: '#727272',
    marginTop: '29px',
    marginBottom: '50px',
  },
});

const LookBookCard = (props) => {
  const classes = useStyle();
  const { title, text, img, className, path } = props;
  const words = title.split(' ');

  return (
    <div className={cn(classes.container, className)}>
      <img className={classes.img} src={img} alt={text} />
      <div className={classes.lookBook}>
        <h2 className={classes.title}>
          <b>{words[0]}</b>
          <br />
          {words[1]}
        </h2>
        <p className={classes.text}>{text}</p>
        <Button className={classes.button} to={path}>view now</Button>
      </div>
    </div>
  );
};

LookBookCard.propTypes = propTypes;
LookBookCard.defaultProps = defaultProps;

export default LookBookCard;
