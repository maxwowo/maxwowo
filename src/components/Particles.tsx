import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'
import TsParticles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

const Particles: FunctionComponent = () => {
  const handleInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <TsParticles
      canvasClassName={cls('absolute', 'z-0')}
      className={cls('hidden', 'md:block')}
      init={handleInit}
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
}

export default Particles
