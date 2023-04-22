import React from "react";
import logo from "../../../assets/icons/logo.svg";
import { useNavigate } from 'react-router-dom'
import DropdownBtn from "./DropdownBtn";

function TopBar() {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-primary border-b-[0.1rem] p-8 px-20 items-center justify-between ">
        <div>
          <img src={logo} alt="Logo For Website" />
        </div>
        <div className="flex gap-8 text-textColor">
          <button className="hover:text-lightBlue"
            onClick={() => navigate('agenda24')} >
              AGENDA
          </button>
          <button className="hover:text-lightBlue"
          onClick={() => navigate('speakers')} >
            SPEAKERS
          </button>
          <button className="hover:text-lightBlue"
          onClick={() => navigate('committee')} >
            COMMITTEE
          </button>
          <button className="hover:text-lightBlue">
            CONTACT
          </button>
          <button className="hover:text-lightBlue"
          onClick={() => navigate('registration')}>
             REGISTRATION 
          </button>
          {/* {<DropdownBtn />} */}
        </div>
      </div>
    </>
  );
}

export default TopBar;
