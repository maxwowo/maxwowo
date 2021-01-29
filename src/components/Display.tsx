import { FunctionComponent } from 'react'

import Centered from './Centered'

const Display: FunctionComponent = () => (
  <Centered>
    <div className="z-10">
      <p className="subpixel-antialiased text-white text-10xl md:text-2xl font-medium">
        Max Wo
      </p>
      <p className="subpixel-antialiased text-white text-3xl font-light">
        Software Engineering student @ UNSW
      </p>
    </div>
  </Centered>
)

export default Display
