import React from 'react';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import classes from './navbar-layout.module.scss';
import drawerClasses from './navbar-layout-drawer.module.scss';

export const NavbarLayoutDrawer = ({ onDrawerClose }) => {
  return (
    <div className={classes.drawer}>
      <div className={drawerClasses.drawerHeader}>
        <IconButton onClick={onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </div>
  );
};
