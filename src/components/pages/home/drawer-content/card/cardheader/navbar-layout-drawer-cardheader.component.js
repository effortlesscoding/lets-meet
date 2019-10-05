import React from 'react';
import classes from './navbar-layout-drawer-cardheader.module.scss';

export const CardHeader = (props) => {
  var style = {
    backgroundImage: `url(${require('@/assets/images/avatar.jpeg')})`
  };

  return (
    <header style={style} className={classes.cardHeader}>
      <h4 className={classes.cardHeaderTitle}>Mike</h4>
    </header>
  );
};
