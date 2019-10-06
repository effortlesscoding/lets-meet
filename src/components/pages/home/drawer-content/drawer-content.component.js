import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {experience} from '../experience';
import { HomeContext } from '../home.context';
import classes from './drawer-content.module.scss';
import Typography from '@material-ui/core/Typography';

const ExperienceLink = ({ scrollListener, experience }) => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (!scrollListener) {
      return;
    }
    scrollListener.registerSubscriber({
      id: experience.id,
      announce: (scrollId) => {
        if (scrollId === experience.id) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    });
  }, [experience.id, scrollListener]);

  const handleClick = (e) => {
    if (!scrollListener) {
      return;
    }
    scrollListener.scrollTo(experience.id);
    setActive(true);
  }
  return (
    <ListItem button key={experience.id} selected={isActive} onClick={handleClick}>
      <Avatar classes={{ root: classes.avatar }} src={experience.companyLogo} />
      <ListItemText primary={experience.company} secondary={experience.roleTitle} />
    </ListItem>
  );
};

export const DrawerContent = () => {
  return (
    <HomeContext.Consumer>
      {
        ({ scrollListener }) => {
          return (
            <>
              {/* <ProfileContacts /> */}
              <Divider />
              <Typography className={classes.title} variant="h5">Work History</Typography>
              <List component="nav" aria-label="quick links to experience">
                {
                  experience.map(_experience => (
                    <ExperienceLink scrollListener={scrollListener} experience={_experience} key={_experience.id} />
                  ))
                }
              </List>
            </>
          );
        }
      }  
    </HomeContext.Consumer>
  );
};
