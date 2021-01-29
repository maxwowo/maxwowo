import classNames from 'classnames'
import { FunctionComponent, HTMLAttributes } from 'react'

const Centered: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <div
    className={classNames(
      className,
      'h-full w-full flex items-center justify-center text-center',
    )}
  >
    {children}
  </div>
)

export default Centered
