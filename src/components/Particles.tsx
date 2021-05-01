import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'
import ParticlesJs from 'react-particles-js'

const Particles: FunctionComponent = () => (
  <ParticlesJs
    canvasClassName={cls('absolute z-0')}
    className={cls('hidden', 'md:block')}
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
  />
)

export default Particles
