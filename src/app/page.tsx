import { FunctionComponent } from 'react'

import { Links } from '@/components/links'
import { Particles } from '@/components/particles'

const Page: FunctionComponent = () => (
  <div className="size-full bg-black">
    <div className="flex size-full items-center justify-center text-center">
      <div>
        <p className="text-8xl font-medium leading-none tracking-tight text-white md:text-10xl">
          Max Wo
        </p>
        <p className="text-xl text-white md:text-4xl">
          Software Engineer @ Atlassian
        </p>
        <Links />
      </div>
    </div>

    <Particles />
  </div>
)

export default Page
