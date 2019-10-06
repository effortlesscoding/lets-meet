import React from 'react';
import classes from './profile-header.module.scss';
import Typography from '@material-ui/core/Typography';

export const ProfileHead = (props) => {
  var style = {
    backgroundImage: `url(${require('@/assets/images/avatar.jpeg')})`
  };

  return (
    <header style={style} className={classes.cardHeader}>
      <Typography className={classes.cardHeaderTitle}>Anh Duy Dao (Mike)</Typography>
      <div className={classes.cardBottomArea}>
        <Typography className={classes.cardHeaderTitle}>React & Angular Front-end Developer</Typography>
      </div>
    </header>
  );
};
