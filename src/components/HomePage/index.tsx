import React from 'react';

import About from './WelcomeAddress';
import Agenda from './Agenda';
import Section from './Section';
// import Speaker from './Speakers';
import Register from './Register';
import Committee from './Committee';
import CourseDirector from "@/components/HomePage/CourseDirector";
import AffiliatedLogo from "@/components/HomePage/Affiliated";

const HomePage = () => {
  return (
      <div>
          <Section />
          <AffiliatedLogo />
          <CourseDirector />
          <About />
          <Agenda />
          {/*<Speaker />*/}
          <Committee />
          <Register />
      </div>
  );
};

export default HomePage;
