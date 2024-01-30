import { FunctionComponent } from 'react'

import { Hero } from '../components/hero'
import { Particles } from '../components/particles'

const Page: FunctionComponent = () => (
  <div className="h-full bg-black">
    <Particles />
    <Hero />
  </div>
)

export default Page
