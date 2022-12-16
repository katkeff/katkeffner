import tomato from '../assets/images/tomato.png'
import pottery from '../assets/images/pottery-studio.png'
import lofi from '../assets/images/lofi-beat-kit.png'
import portfolio from '../assets/images/portfolio.png'

const projects = [
  {
    id: 1,
    title: 'Tomato', 
    tech: 'React Native, Expo, Xcode, React Hooks, Google Maps API, Firebase, Firestore',
    description: [
      'A social media application that allows you to drop a pin to your precise location with a message, a photo, or a video to broadcast events to your friends and the world.'
    ],
    image: tomato,
    link: 'https://github.com/team-tomatoes/tomato',
  },
  {
    id: 2, 
    title: 'Pottery Studio',
    tech: 'React, Redux, Node.js, Express, Sequelize',
    description: [
      'A mock e-commerce website in which users can purchase pottery goods. Includes a home page, shop view, single product view, and a functional cart/checkout page. An admin user has the ability to login, edit products, and delete products.'
    ],
    image: pottery,
    link: 'https://github.com/almighty-ants/pottery-studio'
  },
  {
    id: 3,
    title: 'lofi beat kit',
    tech: 'HTML, CSS, JS, Howler.js',
    description: [
      'A simple six pad drum kit with percussion and melody ready to play on mobile or web browser!',
    ],
    image: lofi,
    link: 'https://github.com/katkeff/lofi-beat-kit',
  }, 
  {
    id: 4, 
    title: 'Portfolio',
    tech: "React, React Hooks, Bootstrap, SCSS, Styled Components",
    description: [
      'A portfolio website to display my skills, projects, and ways to get in touch.'
    ],
    image: portfolio,
    link: 'https://github.com/katkeff/katkeffner'
  }
];

export default projects;
