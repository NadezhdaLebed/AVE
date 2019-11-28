import React from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../../ui-kit/Banner/Banner';
import LookBookCard from '../../components/LookBook/LookbookCard/LookbookCard';
import ModelTabs from '../../components/LookBook/LookBookTabs/ModelTabs';

const useStyles = makeStyles({
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

const LookbookPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner
        className={classes.banner}
        heading="our lookbook"
        text="Latest Posts - mens &#38; womens"
      />
      <ModelTabs />
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

export default LookbookPage;
