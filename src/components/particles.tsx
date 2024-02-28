'use client'

import TsParticles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FunctionComponent, memo, useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

export const Particles: FunctionComponent = memo(() => {
  const windowSize = useWindowSize({ initializeWithValue: false })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      await initParticlesEngine(loadSlim)

      setIsLoading(false)
    })()
  }, [])

  return (
    !isLoading &&
    windowSize.width &&
    windowSize.height && (
      <TsParticles
        options={{
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
              value: (windowSize.width * windowSize.height) / 13824
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
  )
})
