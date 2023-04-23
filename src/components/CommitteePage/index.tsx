import React from 'react';

import Topbar from '../HomePage/Topbar';
// import Footer from '../HomePage/Footer/Footer';

import CourseDirector from './CourseDirector';
import Patrons from './Patrons';
import OrganizingChairman from './OrganizingChairman';
import ScientificCommittee from './ScientificCommittee';
import OrganizingSecretaries from './Organizing Secretaries';
import CommitteeMembers from './CommitteeMembers';

function Committee() {
  return (
      <>
          <div className="pt-20" />
          <CourseDirector />
          {/*<Patrons />*/}
          {/*<OrganizingChairman />*/}
          {/*<OrganizingSecretaries />*/}
          {/*<ScientificCommittee />*/}
          {/*<CommitteeMembers />*/}

      </>
  );
}

export default Committee;