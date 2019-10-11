import React from 'react';
import ParticlesJs from 'react-particles-js';

const Particles = () => (
  <ParticlesJs
    style={
      {
        position: "absolute",
        zIndex: -100
      }
    }
  />
);

export default Particles;
