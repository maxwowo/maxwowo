import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'
import TsParticles from 'react-tsparticles'

const Particles: FunctionComponent = () => (
  <TsParticles
    canvasClassName={cls('absolute z-0')}
    className={cls('hidden', 'md:block')}
    options={{
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 1,
        },
      },
    }}
  />
)

export default Particles
