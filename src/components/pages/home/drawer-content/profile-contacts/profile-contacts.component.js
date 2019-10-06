import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ProfileBody } from './profile-body';
import classes from './profile-contacts.module.scss';

export const ProfileContacts = () => {
  return (
    <article>
      <Typography className={classes.title} variant="h5">Online Presence</Typography>
      <ProfileBody title={'Birth of a Legend'} text={'Hi, my name is mike and im always online!'} />
    </article>
  );
};
