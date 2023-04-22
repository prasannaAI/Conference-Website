import React from "react";
import TopBar from '../HomePage/TopBar/TopBar';
import Section from "../HomePage/Section/Section";
import WelcomeAddress from "../HomePage/WelcomeAddress/WelcomeAddress";
import SpeakerSection from "../HomePage/Speakers/SpeakerSection";
import Agenda from "../HomePage/Agenda/Agenda";
import CourseDirector from "../HomePage/CourseDirector/CourseDirector";
import Register from "../HomePage/Register/Register";
import Footer from "../HomePage/Footer/Footer";

function HomePage() {
  return (
    <>
      <TopBar />
      <Section />
      <WelcomeAddress />
      <SpeakerSection />
      <Agenda />
      <CourseDirector />
      <Register />
      <Footer />
    </>
  );
}

export default HomePage;
