import React from 'react';

// import Footer from '../HomePage/Footer/Footer';

import CourseDirector from './CourseDirector';
import Patrons from './Patrons';
import OrganizingChairman from './OrganizingChairman';
// import ScientificCommittee from './ScientificCommittee';
// import OrganizingSecretaries from './Organizing Secretaries';
// import CommitteeMembers from './CommitteeMembers';

function Committee() {
  return (
      <div>
          <CourseDirector />
          <Patrons />
          <OrganizingChairman />
          {/*<OrganizingSecretaries />*/}
          {/*<ScientificCommittee />*/}
          {/*<CommitteeMembers />*/}
          {/*<Footer />*/}
      </div>
  );
}

export default Committee;