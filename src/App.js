import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Agenda24 from './components/AgendaPage/Agenda24';
import Agenda25 from './components/AgendaPage/Agenda25';
import Agenda3 from './components/AgendaPage/Agenda3';
import Speakers from './components/SpeakersPage/Speakers';
import Committee from './components/CommitteePage/Committee';
import Registration from './components/RegistrationPage/Registration';
import WelcomeAddress from './components/WelcomeAddressPage/WelcomeAddress';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="agenda24" element={<Agenda24 />}  />
        <Route path="agenda25" element={<Agenda25 />}  />
        <Route path="agenda3" element={<Agenda3 />}  />
        <Route path="speakers" element={<Speakers />}  />
        <Route path="committee" element={<Committee />}  />
        <Route path="registration" element={<Registration />}  />
        <Route path="welcomeaddress" element={<WelcomeAddress />}  />
      </Routes>
    </>
  );
}

export default App;

