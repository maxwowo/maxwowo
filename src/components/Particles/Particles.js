import React from 'react';
import ParticlesJs from 'react-particles-js';

import calculateNumParticles from '../../utilities/calculateNumParticles';

const Particles = () => (
  <ParticlesJs
    params={{
      particles: {
        number: {
          value: calculateNumParticles(),
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
    style={{
      position: 'absolute',
      // zIndex: -100
    }}
  />
);

export default Particles;
