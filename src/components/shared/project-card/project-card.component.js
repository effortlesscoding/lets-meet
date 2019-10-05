import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

import classes from './project-card.module.scss';
import { HomeContext } from '../../pages/home/home.context';

export const ProjectCard = (props) => {
  const [ ref, setRef ] = useState(null);
  return (
    <HomeContext.Consumer>
      {({ scrollListener }) => {
        return (
          <div
            id={`prjcard-${props.id}`}
            data-id={props.id}
            ref={(r) => {
              if (r && scrollListener) {
                scrollListener.registerListener(r);
                setRef(r);
              }
            }}
          >
            <div className={classes.titleWrapper}>
              <img className={classes.titleAvatar} src={props.companyLogo} alt={`Logo of ${props.company}`}/>
              <div className={classes.titleWrapperInner}>
                <Typography variant="h5">{props.company}</Typography>
                <Typography variant="h4">{props.roleTitle}</Typography>
              </div>
            </div>
            {props.projects.map((project) => {
              return (
                <div key={project.title} className={classes.projectsWrapper}>
                  <Typography variant="h5">
                    {project.title} ({project.duration})
                  </Typography>
                  <div className={classes.singleProject}>
                    <div className={classes.responsibilities}>
                      <Typography variant="h6">Responsibilities</Typography>
                      <List dense>
                        {project.responsibilities.map((responsibility) => (
                          <ListItem key={responsibility}>
                            <ListItemIcon className={classes.listIcon}>
                              <CheckIcon />
                            </ListItemIcon>
                            <ListItemText primary={responsibility} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                    <div className={classes.technologies}>
                      <Typography variant="h6">Technologies</Typography>
                      <List dense>
                        <ListItem>
                          <ListItemText primary={project.technologies.join(', ')} />
                        </ListItem>
                      </List>
                      <Typography variant="h6">Outcome</Typography>
                      <Typography variant="body1">{project.outcome}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }}
    </HomeContext.Consumer>
  );
};
