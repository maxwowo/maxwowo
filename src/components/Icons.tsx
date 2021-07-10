import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FunctionComponent } from 'react'

import Centered from './Centered'
import Icon from './Icon'

const icons: {
  icon: IconDefinition
  url: string
}[] = [
  {
    icon: faGithub,
    url: 'https://github.com/maxwowo',
  },
  {
    icon: faPlayCircle,
    url: 'https://www.youtube.com/channel/UCkdzgKxdNJpgwR3ewxPMoqQ',
  },
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/maxwowowowo',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/maxwo',
  },
  {
    icon: faFilePdf,
    url: '/resume.pdf',
  },
]

const Icons: FunctionComponent = () => (
  <Centered>
    {icons.map((icon) => (
      <Icon
        key={icon.url}
        icon={icon.icon}
        onClick={() => {
          window.open(icon.url, '_blank')
        }}
      />
    ))}
  </Centered>
)

export default Icons
