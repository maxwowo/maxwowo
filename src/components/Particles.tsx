import React from 'react'
import ParticlesJs from 'react-particles-js'

const Particles = () => (
  <ParticlesJs
    params={{
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
      particles: {
        number: {
          value: 100,
        },
      },
    }}
    style={{
      backgroundColor: 'black',
      position: 'absolute',
    }}
  />
)

export default Particles
