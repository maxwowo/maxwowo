import { FunctionComponent, memo } from 'react'

import { Centered } from '@/components/centered'
import { Links } from '@/components/links'

export const Hero: FunctionComponent = memo(() => (
  <Centered>
    <div className="z-10">
      <p className="text-8xl font-medium text-white subpixel-antialiased md:text-10xl">
        Max Wo
      </p>
      <p className="text-lg text-white subpixel-antialiased md:text-3xl">
        Software Engineer @ Atlassian
      </p>
      <Links />
    </div>
  </Centered>
))
