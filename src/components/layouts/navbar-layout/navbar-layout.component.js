import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import classes from './navbar-layout.module.scss';

import { NavbarLayoutDrawer } from './navbar-layout-drawer.component';

export const NavbarLayout = ({ children, title, drawer }) => {
  const [isDrawerOpen, handleDrawerToggle] = useState(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.titleWrapper}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="content area">
        <Hidden smUp implementation="css">
          {drawer || <NavbarLayoutDrawer />}
          {/* <Drawer
            container={<div></div>}
            variant="temporary"
            anchor="left"
            open={isDrawerOpen}
            onClose={() => handleDrawerToggle(!isDrawerOpen)}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer || <div />}
          </Drawer> */}
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer || <NavbarLayoutDrawer />}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {children}
        </main>
      </nav>
    </Box>
  );
};
