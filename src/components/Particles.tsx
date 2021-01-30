import classNames from 'classnames'
import ParticlesJs from 'react-particles-js'

const Particles = () => (
  <ParticlesJs
    canvasClassName={classNames('absolute z-0')}
    className={classNames('hidden', 'md:block')}
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
