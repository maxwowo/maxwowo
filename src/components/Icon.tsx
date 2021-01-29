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
      'text-4xl z-auto transition duration-200 ease-in-out hover:cursor-pointer hover:transform hover:scale-150',
    )}
    icon={icon}
  />
)

export default Icon
