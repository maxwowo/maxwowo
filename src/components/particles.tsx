'use client'

import cls from '@maxwowo/cls'
import TsParticles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FunctionComponent, useEffect, useState } from 'react'

export const Particles: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      await initParticlesEngine(async engine => {
        loadSlim(engine)
      })

      setIsLoading(false)
    })()
  }, [])

  return isLoading ? null : (
    <TsParticles
      className={cls('hidden', 'md:block')}
      options={{
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          }
        },
        particles: {
          links: {
            enable: true
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 150
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 1
          }
        }
      }}
    />
  )
}
