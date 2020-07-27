import React from 'react';

import Center from '../../../components/Center/Center';
import Description from './Description/Description';
import IconBar from './IconBar/IconBar';
import Name from './Name/Name';

const Display = () => (
  <Center>
    <div>
      <Name />
      <Description />
      <IconBar />
    </div>
  </Center>
);

export default Display;
