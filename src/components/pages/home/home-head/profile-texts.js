import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faDownload, faMapMarker } from '@fortawesome/free-solid-svg-icons';

export const mainItems = [{
  id: 1,
  text: 'Melbourne, Australia',
  icon: <FontAwesomeIcon icon={faMapMarker} />
}]

export const keyStrengths = [{
  id: 1,
  text: 'Development of highly interactive React.JS and Angular web applications',
}, {
  id: 2,
  text: 'Expert in Javascript, Typescript, HTML and CSS',
}, {
  id: 3,
  text: 'Expert in writing responsive and cross-browser friendly CSS or SASS/SCSS markup',
}, {
  id: 4,
  text: 'Production of easy-to-read and highly re-usable code',
}, {
  id: 5,
  text: 'Obsession with user experience, testing and automation',
}];

export const secondaryStrengths = [{
  id: 1,
  text: 'RESTful API development in Node.JS, Rails or Java',
}, {
  id: 2,
  text: 'GraphQL API development in Node.JS',
}, {
  id: 3,
  text: 'SQL databases (PostgreSQL, MySQL)',
}, {
  id: 4,
  text: 'CI Pipeline setup',
}, {
  id: 5,
  text: 'Mobile app development in React Native',
}];

export const contactDetails = [{
  id: 1,
  text: 'Linkedin',
  link: 'https://www.linkedin.com/in/mike-dao-83bb1728/',
  icon: <FontAwesomeIcon icon={['fab', 'linkedin']} />
}, {
  id: 2,
  text: 'Github',
  link: 'https://github.com/effortlesscoding',
  icon: <FontAwesomeIcon icon={['fab', 'github']} />
}, {
  id: 3,
  text: 'E-mail',
  link: 'mailto:theeffortlesscoding@gmail.com',
  icon: <FontAwesomeIcon icon={faMailBulk} />
}, {
  id: 4,
  text: 'Download my resume',
  link: 'https://drive.google.com/open?id=1BhPBoJhRVloRuuXNN0vRZRdYN1nMFLCB',
  icon: <FontAwesomeIcon icon={faDownload} />
}];
