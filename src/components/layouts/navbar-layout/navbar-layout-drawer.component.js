import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import classes from './navbar-layout.module.scss';
import drawerClasses from './navbar-layout-drawer.module.scss';
import Typography from '@material-ui/core/Typography';

export const NavbarLayoutDrawer = ({ drawer, onDrawerClose, content }) => {
  return (
    <div className={classes.drawer}>
      <div className={drawerClasses.drawerHeader}>
        <Typography variant="body2">Portfolio Beta 0.1</Typography>
        <IconButton onClick={onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {drawer}
      {/* 
      <Card />
      <Divider />
      {content || null} */}
    </div>
  );
};
