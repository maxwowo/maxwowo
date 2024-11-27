import { FunctionComponent, memo } from 'react'

import { Centered } from '@/components/centered'
import { Links } from '@/components/links'

export const Hero: FunctionComponent = memo(() => (
  <Centered>
    <div className="z-10">
      <p className="text-8xl font-medium leading-none tracking-tight text-white md:text-10xl">
        Max Wo
      </p>
      <p className="text-xl text-white md:text-3xl">
        Software Engineer @ Atlassian
      </p>
      <Links />
    </div>
  </Centered>
))
