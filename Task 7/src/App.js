import React from 'react';
import ProfileCard from './components/ProfileCard.jsx';

const profile = {
  name: 'Balaji Sivakumar',
  title: 'Software Engineer',
  location: 'Coimbatore, Tamil Nadu',
  email: 'balaji022212@gmail.com',
  phone: '+91 9345355312',
  linkedin: 'https://linkedin.com/in/balaji0212',
  github: 'https://github.com/balaji-0212',
  summary:
    'Detail-oriented Software Engineer with a strong foundation in Python, software development principles, debugging, and performance improvement. Experienced in data analytics, SQL automation, and building reliable applications with clean engineering practices.',
  highlights: [
    'Python',
    'Data Analytics',
    'SQL & MySQL',
    'HTML & CSS',
    'AWS',
    'GitHub Actions',
  ],
  featuredProject:
    'EmotionSense AI: a real-time emotion analytics system built with TensorFlow, Keras, Flask, OpenCV, and GitHub Actions.',
};

function App() {
  return React.createElement(
    'main',
    { className: 'app-shell' },
    React.createElement(ProfileCard, { profile })
  );
}

export default App;
