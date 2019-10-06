import React, { useEffect, useState, } from 'react';
import { ProjectCard } from '../../shared/project-card';
import { experience } from './experience';
import { DrawerContent } from './drawer-content';
import { NavbarLayout } from '../../layouts';
import { HomeContext } from './home.context';
import { ScrollListenerService } from '../../../services/scroll-listener.service';
import { HomeHead } from './home-head/home-head.component';
import Divider from '@material-ui/core/Divider';

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
        <Divider />
        <br/>
        <div>
          {experience.map((e) => <ProjectCard key={e.id} {...e} />)}
        </div>
      </NavbarLayout>
    </HomeContext.Provider>
  );
};
