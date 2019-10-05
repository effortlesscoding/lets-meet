export const experience = [
  {
    id: '1',
    company: 'Vanguard Investments Australia',
    companyLogo: 'https://g.foolcdn.com/art/companylogos/square/vti.png',
    duration: '2018-2019',
    roleTitle: 'Angular & React Native Developer (Contractor)',
    projects: [
      {
        duration: '2018-2019',
        title: 'Angular web application',
        responsibilities: [
          'Development of a web application in Angular with Typescript',
          'Development of reusable modules and components for 5 different internal git repositories',
          'Implementation of responsive SCSS that works on Safari, Firefox, IE and Chrome',
          'Performance bottleneck investigation and optimisation',
          'Multi-language support and integration with dynamic CMS',
          'User experience that supports asynchronous events without reloading the app',
          'Integration with RESTful micro-services with Cookie-based authentication',
          'Unit tests, e2e tests and visual regression tests',
          'Collaborative development in a team of 10 different developers',
          'Input into front-end processes to provide continuous improvement of development quality'
        ],
        technologies: [
          'Angular 7',
          'RxJS for asynchronous programming',
          'Redux for local state management',
          'SCSS',
          'HTML'
        ],
        outcome:
          'Successfully delivered multiple milestones of the web app under extremely challenging conditions. Integrated with complex enterprise infrastructure with dozens of micro-services, communicated with dozens of stakeholders at a time, and created UI that matched design specs provided by a professional UI and UX agency.'
      }
    ]
  },
  {
    id: '2',
    company: 'Chatforce Facebook Chatbot Builder',
    companyLogo: require('@/assets/images/chatforce-square.png'),
    duration: '2018-2019',
    roleTitle: 'React.JS Typescript & Node.JS Developer',
    projects: [
      {
        duration: '2018-2019',
        title: 'React & Node.js application',
        responsibilities: [
          'Development of an extensible protocol that makes it easy to add new chatbot conversational blocks',
          'Used highly re-usable components, HOC functions and other React.JS concepts for better productivity',
          'Unit tests to make sure new releases are not breaking existing functionality',
          'CI process on AWS with integrated tests',
          'Worked remotely with 2 other developers from other countries',
          'Integration with RESTful APIs',
          'Integration with 3rd party APIs: Facebook, Twillio, Realestate.com.au, Zapier',
          '100826 lines of code',
        ],
        technologies: [
          'React.JS',
          'Redux',
          'Redux-thunk (asynchronous actions)',
          'SCSS',
          'HTML',
          'Typescript',
          'Jest',
          'CircleCI',
          'AWS ECS',
          'AWS RDS',
        ],
        outcome:
          'Developed a functional cross-browser friendly web app that allows anyone to build automated chatbots with 0 coding. Conversational chatbot elements included gallery of images, text, images, video and audio, external API integrations, and more.'
      }
    ]
  },{
    id: '3',
    company: 'VIC ELECTORAL COMMISSION EARLY VOTING',
    companyLogo: require('@/assets/images/VEC-logo.gif'),
    duration: '2018-2019',
    roleTitle: 'React.JS, HTML, CSS Developer',
    projects: [
      {
        duration: '2018-2019',
        title: 'React & Node.js application',
        responsibilities: [
          'Pixel Perfect design implementation under extremely strict design requirements and deadlines',
          'Integration with Google Maps',
          'Unit tests',
          'Close collaboration with stakeholders and backend developers',
          'Achieved mobile responsiveness and cross-browser compatibility (IE, Chrome, Safari, Firefox and Mobile Browsers)',
          'Custom JS components development when open-source alternatives were not available'
        ],
        technologies: [
          'React.JS',
          'MobX',
          'CSS',
          'HTML',
          'Typescript',
          'Karma',
        ],
        outcome:
          'Released a new version of the early voting centre website which successfully went live. Successfully developed UI based on extremely strict pixel-perfect design specs.'
      }
    ]
  }
];
