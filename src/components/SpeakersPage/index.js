import React from 'react';

import NationalSpeakers from './NationalSpeakers';
import InternationalSpeakers from './InternationalSpeakers';

function Index() {
  return (
      <div>
          <InternationalSpeakers />
          <NationalSpeakers />
      </div>
  );
}

export default Index;