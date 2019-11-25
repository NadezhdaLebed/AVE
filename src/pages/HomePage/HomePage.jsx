import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '../../ui-kit/Button/Button';
import LookBookCard from '../../components/LookBook/LookbookCard/LookbookCard';
import HomeTabs from '../../components/Home/ProductTabs/ProductTabs';

const useStyles = makeStyles({
  banner: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#f8f8f8',
    zIndex: 0,
    height: '100vh',
    maxHeight: '830px',
  },
  title: {
    fontSize: '450px',
    fontWeight: 'bold',
    letterSpacing: '130px',
    textAlign: 'center',
    color: '#575153',
    zIndex: 1,
    userSelect: 'none',
  },
  img: {
    position: 'absolute',
    top: '-132px',
    bottom: 0,
    left: '10%',
    width: '100%',
    maxWidth: '33vw',
    zIndex: -1,
  },
  button: {
    margin: '100px 10% 0 auto',
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
        <Button className={classes.button}>shop men’s collection</Button>
      </div>
      <HomeTabs />
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
          text="See an item you like and click the 	&#9825; button to add it to your lookbook where you can create your own perfect look.
          It’s like your own boutique!"
          path="/"
        />
      </div>
    </div>
  );
};

export default HomePage;
