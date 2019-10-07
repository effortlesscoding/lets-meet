import React, { useEffect, useState, } from 'react';
import { ProjectCard } from '../../shared/project-card';
import { experience } from './experience';
import { DrawerContent } from './drawer-content';
import { NavbarLayout } from '../../layouts';
import { HomeContext } from './home.context';
import { ScrollListenerService } from '../../../services/scroll-listener.service';
import { HomeHead } from './home-head/home-head.component';
import Divider from '@material-ui/core/Divider';
import { Showreel } from './showreel';
import { Typography } from '@material-ui/core';

export const Homepage = () => {
  const [scrollListener, setScrollListener] = useState();
  useEffect(() => {
    if (!scrollListener) {
      const scrollListener = new ScrollListenerService();
      scrollListener.startListening();
      setScrollListener(scrollListener);
    }
  }, [scrollListener]);

  return (
    <HomeContext.Provider value={{ scrollListener, }}>
      <NavbarLayout drawer={<DrawerContent />} title="My Job Experience Below">
        <HomeHead />
        <br/>
        <Typography variant="h4">Showcase</Typography>
        <br />
        <Showreel />
        <Divider />
        <br/>
        <Typography variant="h4">Recent Work Experience</Typography>
        <br />
        <div>
          {experience.map((e) => <ProjectCard key={e.id} {...e} />)}
        </div>
        <Typography variant="h4">Is that it?</Typography>
        <br />
        <Typography variant="body1">For my full work history, just check my LinkedIN: <a href="https://www.linkedin.com/in/mike-dao-83bb1728/" target="_blank">LinkedIn link</a></Typography>
      </NavbarLayout>
    </HomeContext.Provider>
  );
};
