module.exports = {
  pathPrefix: '',
  siteUrl: 'https://makersmelx.github.io',
  siteTitle: 'Jiayao Wu',
  siteDescription: 'Logbook of a student software developer',
  author: 'Jiayao Wu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT ||
      'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    about: '/',
    interest: '/interest',
    blog: '/blog',
  },
  social: {
    github: 'https://github.com/makersmelx',
    twitter: 'https://twitter.com/makersmelx',
    telegram: 'https://t.me/Makersmelx',
    linkedin: 'https://www.linkedin.com/in/jiayao-wu-97a112188/',
  },
  education: [
    {
      date: 'Sep 2017 - Present',
      icon: 'university',
      title: 'B.S.E. in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University, China',
    }, {
      date: 'Sep 2014 - Jun 2017',
      icon: 'school',
      title: 'High School',
      location: 'No.2 High School of East China Normal University, China',
    }],
  experience: [
    {
      date: 'Sep 2017 - Present',
      icon: 'university',
      title: 'B.S.E. in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University, China',
    }, {
      date: 'Sep 2014 - Jun 2017',
      icon: 'school',
      title: 'High School',
      location: 'No.2 High School of East China Normal University, China',
    }],
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT ||
      'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
