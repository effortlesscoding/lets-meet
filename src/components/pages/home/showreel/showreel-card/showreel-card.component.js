import React from 'react';
import classes from './showreel-card.module.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const ShowreelCard = ({ project }) => {
  return (
    <div className={classes.card}>
      <div>
        <img className={classes.thumbnail} src={project.thumbnail} />
      </div>
      <div className={classes.descriptionArea}>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="h6">{project.role}</Typography>
        <br/>
        <Typography variant="subtitle1">Dates: {project.duration}</Typography>
        <br/>
        <Typography variant="body1">{project.description}</Typography>
        <div className={classes.descriptionBottomArea}>
          <Button variant="contained" color="primary" onClick={() => window.open(project.youtubeURL, '_blank')}>Video Demo</Button>
        </div>
      </div>
    </div>
  );
};
