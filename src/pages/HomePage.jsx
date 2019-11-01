import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '../ui-kit/Button/Button';
import LookBookCard from '../ui-kit/LookbookCard/LookbookCard';

const useStyles = makeStyles({
  banner: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#f8f8f8',
    zIndex: 0,
  },
  title: {
    fontSize: '450px',
    fontWeight: 'bold',
    letterSpacing: '130px',
    textAlign: 'center',
    color: '#575153',
    zIndex: 1,
  },
  img: {
    top: '-94px',
    left: '15%',
    width: '100%',
    maxWidth: '25vw',
    height: '100%',
    maxHeight: '270vh',
    position: 'absolute',
    zIndex: -1,
  },
  button: {
    margin: '122px 10% 122px auto',
  },
  lookBookCards: {
    display: 'flex',
    backgroundColor: 'white',
    paddingTop: '62px',
    paddingBottom: '124px',
  },
  lookBook: {
    marginRight: '30px',
    '&:last-child': {
      marginRight: '0',
    },
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h1 className={classes.title}>AVE</h1>
        <img
          className={classes.img}
          src="../assets/png/home.png"
          alt="avenue fashion"
        />
        <Button className={classes.button} text="shop men’s collection" />
      </div>
      <div className={classes.lookBookCards}>
        <LookBookCard
          className={classes.lookBook}
          img="../assets/png/menLook.png"
          title="men’s lookbook"
          text="Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
          Elementum metus facilisis ut phasellu."
          path="/"
        />
        <LookBookCard
          className={classes.lookBook}
          img="../assets/png/womenLook.png"
          title="women’s lookbook"
          text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus."
          path="/"
        />
        <LookBookCard
          className={classes.lookBook}
          img="../assets/png/youLook.png"
          title="your lookbook"
          text="See an item you like and click the  button to add it to your lookbook where you can create your own perfect look.
          It’s like your own boutique!"
          path="/"
        />
      </div>
    </div>
  );
};

export default HomePage;
