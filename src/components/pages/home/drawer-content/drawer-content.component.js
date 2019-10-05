import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import {Card} from './card/navbar-layout-drawer-card.component';
import {experience} from '../experience';
import { HomeContext } from '../home.context';

const ExperienceLink = ({ scrollListener, experience }) => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (!scrollListener) {
      return;
    }
    scrollListener.registerSubscriber({
      id: experience.id,
      announce: (scrollId) => {
        console.log('announce!', scrollId);
        if (scrollId === experience.id) {
          console.log('Set to active!');
          setActive(true);
        } else {
          setActive(false);
        }
      }
    });
  }, [scrollListener]);

  const handleClick = (e) => {
    if (!scrollListener) {
      return;
    }
    scrollListener.scrollTo(experience.id);
    setActive(true);
  }
  return (
    <ListItem button key={experience.id} selected={isActive} onClick={handleClick}>
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
              {/* <Card /> */}
              <Divider />
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
