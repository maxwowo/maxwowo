import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'

import Centered from './Centered'
import Links from './Links'

const Hero: FunctionComponent = () => (
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
        Software Engineer @ Atlassian
      </p>
      <Links />
    </div>
  </Centered>
)

export default Hero
