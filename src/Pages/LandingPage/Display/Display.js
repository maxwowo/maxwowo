import React from 'react';

import Center from '../../../Components/Center/Center';
import Name from './Name/Name';
import Description from './Description/Description';
import IconBar from './IconBar/IconBar';

const Display = () => (
  <Center>
    <div>
      <Name/>
      <Description/>
      <IconBar/>
    </div>
  </Center>
);

export default Display;
