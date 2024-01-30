import cls from '@maxwowo/cls'
import { FunctionComponent, HTMLAttributes } from 'react'

export const Centered: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className
}) => (
  <div
    className={cls(
      className,
      'h-full',
      'w-full',
      'flex',
      'items-center',
      'justify-center',
      'text-center'
    )}
  >
    {children}
  </div>
)
