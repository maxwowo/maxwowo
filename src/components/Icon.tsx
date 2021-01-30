import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface IconProps extends FontAwesomeIconProps {
  icon: IconProp
}

const Icon: FunctionComponent<IconProps> = ({ className, icon, ...rest }) => (
  <FontAwesomeIcon
    {...rest}
    className={classNames(
      className,
      'text-white',
      'text-5xl',
      'transition',
      'duration-200',
      'ease-in-out',
      'transform',
      'mx-6',
      'mt-5',
      'border-white',
      'cursor-pointer',
      'hover:scale-150',
    )}
    icon={icon}
  />
)

export default Icon
