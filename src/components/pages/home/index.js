import React from 'react';
import { ProjectCard } from '../../shared/project-card';
import { experience } from './experience';

export const Homepage = () => {
  return (
    <div>
      {experience.map(e => <ProjectCard {...e} />)}
    </div>
  );
};
