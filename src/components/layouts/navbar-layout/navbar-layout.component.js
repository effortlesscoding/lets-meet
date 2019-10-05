import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

import classes from './navbar-layout.module.scss';

import { NavbarLayoutDrawer } from './navbar-layout-drawer.component';

export const NavbarLayout = ({ children, title, drawer }) => {
  const [ isDrawerOpen, handleDrawerToggle ] = useState(true);
  return (
    <Box>
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen
        })}
      >
        <Toolbar>
          {isDrawerOpen ? null : (
            <IconButton
              onClick={() => handleDrawerToggle(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ChevronRightIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.titleWrapper}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="content area">
        <Drawer open={isDrawerOpen} variant="persistent">
          <NavbarLayoutDrawer drawer={drawer || null} onDrawerClose={() => handleDrawerToggle(false)} />
        </Drawer>
        <main
          id="main-navbar-content"
          className={clsx(classes.content, {
            [classes.contentShift]: isDrawerOpen
          })}
        >
          {children}
        </main>
      </nav>
    </Box>
  );
};
