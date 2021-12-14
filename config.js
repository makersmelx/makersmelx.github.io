module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jiayao.me',
  siteTitle: 'Jiayao Wu',
  siteDescription: 'Logbook of a student software developer',
  author: 'Jiayao Wu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT ||
    'https://rolwinreevan.disqus.com/embed.js',
  // route
  pages: {
    about: '/',
    experience: '/experience/',
    portfolio: '/portfolio/'
    // 'Fun Facts': '/funFacts',
    // blog: '/blog',
    // tags: '/tags'
  },
  // about me
  aboutMe: [
    `Hello friendly strangers, I am Mike.`,
    'I am a first-year master student studying information science at University of Michigan.',
    'I earned my Bachelor\'s Degree in Electrical and Computer Engineering at Shanghai Jiao Tong University.',
    'I was a software engineer intern at Apple.',
    'My areas of interest are software engineering and interaction design.',
    'I am always seeking to work on amazing things that connect people with joy and inspiration.'
  ],
  resume: 'Jiayao\ Wu\ Resume.pdf',
  // side bar contacts
  social: {
    github: 'https://github.com/makersmelx',
    twitter: 'https://twitter.com/makersmelx',
    telegram: 'https://t.me/Makersmelx',
    linkedin: 'https://www.linkedin.com/in/jiayaowu/'
  },
  // education
  education: [
    {
      date: 'Aug. 2021 - Present',
      icon: 'university',
      title: 'Master of Science in Information',
      location: 'University of Michigan, Ann Arbor, MI'
    },
    {
      date: 'Sept. 2017 - Aug. 2021',
      icon: 'university',
      title: 'B.S.E. in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University, Shanghai, China'
    },
    {
      date: 'Sep 2014 - Jun 2017',
      icon: 'school',
      title: 'High School',
      location: 'No.2 High School of East China Normal University, China'
    }
  ],
  experience: [
    {
      date: 'Jan 2020 - July 2020',
      icon: 'apple',
      company: 'Apple Inc.',
      team: 'CoreOS China',
      position: 'Software Engineer Intern',
      work: [
        'Joined CoreOS China team, working on an internal tool that automates routine tasks at Apple’s manufacturing lines in China.',
        'Implemented the front end that allows users to create template or customized workflows for routine manufacturing tasks.',
        'Designed the user interface, providing a streamlined experience to build and modify workflows.',
        'Evaluated data and visualized in Python such as line charts of monthly usage.',
        'Improved the team’s productivity by saving an average of 4 hours per workflow.'
      ]
    },
    {
      date: 'May 2020 - Aug 2021',
      icon: 'university',
      company: 'Shanghai Jiao Tong University',
      team: 'UM-SJTU Joint Institute',
      position: 'Teaching Assistant',
      work: [
        'Hosted review sessions and discussion sessions.',
        'Prepared new assignments in modern C++, wrote detailed specification',
        'Programmed Python scripts to automate grading scripts, used in 4 courses.'
      ]
    }
  ],
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT ||
    'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    // javascript: {
    //   name: 'javascript',
    //   description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    //   color: '#f0da50'
    // },
    // nodejs: {
    //   name: 'Node.js',
    //   description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
    //   color: '#90c53f'
    // },
    // typescript: {
    //   name: 'typescript',
    //   description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    //   color: '#257acc'
    // },
    // reactjs: {
    //   name: 'reactjs',
    //   description: 'React is an open source JavaScript library used for designing user interfaces.',
    //   color: '#61dbfa'
    // },
    // html: {
    //   name: 'HTML',
    //   description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
    //   color: '#dd3431'
    // },
    // css: {
    //   name: 'css',
    //   description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
    //   color: '#43ace0'
    // },
    // python: {
    //   name: 'python',
    //   description: 'A general purpose programming language that is widely used for developing various applications.',
    //   color: '#f9c646'
    // },
    // wota: {
    //   name: 'Cyalume Dance (WOTA)',
    //   description: 'a sll',
    //   color: '#f9c646'
    // }
  }
};
