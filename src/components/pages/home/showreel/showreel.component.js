import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import classes from './showreel.module.scss';
import { ShowreelCard } from './showreel-card';
import { projects } from './showreel.projects';
import Fab from '@material-ui/core/Fab';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Showreel = (props) => {
  const [currentSlide, setSlide] = useState(0);
  const handlePrevious = () => {
    if (currentSlide > 0) {
      setSlide(currentSlide - 1);
    }
  };
  const handleNext = () => {
    if (currentSlide < projects.length - 1) {
      setSlide(currentSlide + 1);
    }
  }
  return (
    <div className={classes.showreelContainer}>
      <SwipeableViews enableMouseEvents index={currentSlide} onChangeIndex={index => setSlide(index)}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={classes.slideCard}>
              <ShowreelCard project={project} />
            </div>
          );
        })}
      </SwipeableViews>

      <Fab color="primary" aria-label="next" className={classes.fabLeft} onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Fab>

      <Fab color="primary" aria-label="previous" className={classes.fabRight} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Fab>
    </div>
  );
};
