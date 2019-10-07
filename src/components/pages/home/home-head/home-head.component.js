import React from 'react';
import classes from './home-head.module.scss';
import { ProfileHead } from '../profile-header';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { keyStrengths, secondaryStrengths, contactDetails, mainItems } from './profile-texts';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const openLink = link => {
  window.open(link, '_blank');
};

const ListItems = ({ items }) => {
  return (
    <List>
      {items.map(({ text, id, icon, link }) => (
        <ListItem key={id} {...(link ? { button: true, onClick: () => openLink(link), } : {})}>
          {icon ? <ListItemAvatar>{icon}</ListItemAvatar> : <ListItemAvatar><FontAwesomeIcon icon={faChevronRight} /></ListItemAvatar>}
          <ListItemText secondary={text}/>
        </ListItem>
      ))}
    </List>
  )
};

export const HomeHead = (props) => {
  return (
    <div className={classes.headContainer}>
      <div className={`${classes.avatar} ${classes.column}`}>
        <ProfileHead />
        <br />
        <ListItems items={mainItems}/>
      </div>
      <div className={classes.column}>
        <Typography variant="h6">Key Strengths</Typography>
        <ListItems items={keyStrengths} />
      </div>
      <div className={classes.column}>
        <Typography variant="h6">Additional Skills</Typography>
        <ListItems items={secondaryStrengths} />
      </div>
      <div className={classes.column}>
        <Typography variant="h6">Contact Details</Typography>
        <ListItems items={contactDetails} />
      </div>
    </div>
  )
};
