import tomato from '../assets/images/tomato.gif'
import lofi from '../assets/images/lofi-beat-kit.gif'

const projects = [
  {
    id: 1,
    title: 'Tomato',
    tech: 'React Native, Expo, Xcode, React Hooks, Google Maps API, Firebase, Firestore',
    description: [
      'Tomato is a social media application that allows you to drop a pin to your precise location with a message, a photo, or a video to broadcast events to your friends and the world.'
    ],
    image: tomato,
    link: 'https://github.com/team-tomatoes/tomato',
  },
  {
    id: 2,
    title: 'lofi-beat-kit',
    tech: 'HTML, CSS, JS, Howler.js',
    description: [
      'A simple six pad drum kit with percussion and melody ready to play on mobile or web browser!',
    ],
    image: lofi,
    link: 'https://github.com/katkeff/lofi-beat-kit',
  }
];

export default projects;
