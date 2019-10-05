import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import classes from './navbar-layout.module.scss';
import drawerClasses from './navbar-layout-drawer.module.scss';
import {Card} from './card/navbar-layout-drawer-card.component';



export const NavbarLayoutDrawer = ({ onDrawerClose }) => {
  return (
    <div className={classes.drawer}>
      <div className={drawerClasses.drawerHeader}>
        <IconButton onClick={onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Card />
    </div>
  );
};
