import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProfileBody = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar >
            <FontAwesomeIcon icon={['fab', 'github']} />
        </ListItemAvatar>
        <ListItemText primary="Github" />
      </ListItem>
      <ListItem>
        <ListItemAvatar >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </ListItemAvatar>
        <ListItemText primary="Linkedin" />
      </ListItem>
    </List>
  );
};
