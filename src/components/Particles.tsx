import classNames from 'classnames'
import ParticlesJs from 'react-particles-js'

const Particles = () => (
  <ParticlesJs
    canvasClassName={classNames('bg-black', 'absolute z-0')}
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
          value: 50,
        },
      },
    }}
  />
)

export default Particles
