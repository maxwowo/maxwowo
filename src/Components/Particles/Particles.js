import React from 'react';
import ParticlesJs from 'react-particles-js';

const Particles = () => (
  <ParticlesJs
    params={
      {
        particles: {
          number: {
            value: 100
          }
        }
      }
    }
    style={
      {
        position: "absolute",
        zIndex: -100
      }
    }
  />
);

export default Particles;
