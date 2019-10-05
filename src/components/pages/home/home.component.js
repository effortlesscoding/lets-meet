import React, { useEffect, useState, } from 'react';
import { ProjectCard } from '../../shared/project-card';
import { experience } from './experience';
import { DrawerContent } from './drawer-content';
import { NavbarLayout } from '../../layouts';
import { HomeContext } from './home.context';
import { ScrollListenerService } from '../../../services/scroll-listener.service';

export const Homepage = () => {
  const [scrollListener, setScrollListener] = useState();
  useEffect(() => {
    if (!scrollListener) {
      const scrollListener = new ScrollListenerService();
      scrollListener.startListening();
      setScrollListener(scrollListener);
    }
  }, []);

  return (
    <HomeContext.Provider value={{ scrollListener, }}>
      <NavbarLayout drawer={<DrawerContent />} title="Highly Skilled React Front-End Developer">
        <div>
          {experience.map((e) => <ProjectCard key={e.id} {...e} />)}
        </div>
      </NavbarLayout>
    </HomeContext.Provider>
  );
};
