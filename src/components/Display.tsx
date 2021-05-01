import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'

import Centered from './Centered'
import Icons from './Icons'

const Display: FunctionComponent = () => (
  <Centered>
    <div className={cls('z-10')}>
      <p
        className={cls(
          'subpixel-antialiased',
          'text-white',
          'text-8xl',
          'md:text-10xl',
          'font-medium',
        )}
      >
        Max Wo
      </p>
      <p
        className={cls(
          'subpixel-antialiased',
          'text-white',
          'text-lg',
          'md:text-3xl',
        )}
      >
        Software Engineering student @ UNSW
      </p>
      <Icons />
    </div>
  </Centered>
)

export default Display
