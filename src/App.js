import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Section from "./components/Section/Section";
import WelcomeAddress from "./components/WelcomeAddress/WelcomeAddress";
import SpeakerSection from "./components/Speakers/SpeakerSection";
import Agenda from "./components/Agenda/Agenda";
import CourseDirector from "./components/CourseDirector/CourseDirector";



function App() {
  return (
    <>
      <TopBar/>
      <Section/>
      <WelcomeAddress />
      <SpeakerSection />
      <Agenda />
      <CourseDirector />
    </>
  );
}

export default App;
