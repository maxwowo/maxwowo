import { FunctionComponent } from 'react'

import Centered from './Centered'
import Particles from './Particles'

const LandingPage: FunctionComponent = () => (
  <div className="h-screen">
    <Particles />
    <Centered>bruh</Centered>
  </div>
)

export default LandingPage
