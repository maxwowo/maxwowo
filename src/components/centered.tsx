import { FunctionComponent, HTMLAttributes } from 'react'

export const Centered: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className
}) => (
  <div
    className={`flex size-full items-center justify-center text-center ${className}`}
  >
    {children}
  </div>
)
