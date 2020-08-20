import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Center from '../Center/Center';
import Icon from '../Icon/Icon';

const iconLinks = [
  {
    icon: faGithub,
    url: 'https://github.com/maxwowo',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/maxwo',
  },
  {
    icon: faBlog,
    url: 'https://street.maxwowo.com/',
  },
  {
    icon: faFilePdf,
    url: '/resume.pdf',
  },
];

const IconBar = () => (
  <Center>
    {iconLinks.map((iconLink) => (
      <Icon
        icon={iconLink.icon}
        onClick={() => {
          window.open(iconLink.url, '_blank');
        }}
        key={iconLink.url}
      />
    ))}
  </Center>
);

export default IconBar;
