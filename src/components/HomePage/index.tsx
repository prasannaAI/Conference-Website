import React from 'react';

import About from './About';
import Agenda from './Agenda';
import Section from './Section';
// import Speaker from './Speakers';
import Register from './Register';
import Committee from './Committee';

const HomePage = () => {
  return (
      <div>
          <Section />
          <About />
          <Agenda />
          {/*<Speaker />*/}
          <Committee />
          <Register />
      </div>
  );
};

export default HomePage;
