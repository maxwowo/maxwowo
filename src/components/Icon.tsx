import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'

interface IconProps extends FontAwesomeIconProps {
  icon: IconProp
}

const Icon: FunctionComponent<IconProps> = ({ className, icon, ...rest }) => (
  <FontAwesomeIcon
    {...rest}
    className={cls(
      className,
      'text-white',
      'text-4xl',
      'md:text-5xl',
      'transition',
      'duration-200',
      'ease-in-out',
      'transform-gpu',
      'mx-4',
      'md:mx-6',
      'mt-4',
      'md:mt-6',
      'border-white',
      'cursor-pointer',
      'hover:scale-150',
    )}
    icon={icon}
  />
)

export default Icon
