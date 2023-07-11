import React from 'react';

import NationalSpeakers from './NationalSpeakers';
import InternationalSpeakers from './InternationalSpeakers';
import Faculty from './nationalFaculty';

function Index() {
  return (
      <div>
          <InternationalSpeakers />
          <NationalSpeakers />
          <Faculty />
      </div>
  );
}

export default Index;