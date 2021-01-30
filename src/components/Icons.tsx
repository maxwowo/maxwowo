import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FunctionComponent } from 'react'

import Centered from './Centered'
import Icon from './Icon'

const icons: { icon: IconDefinition; url: string }[] = [
  {
    icon: faGithub,
    url: 'https://github.com/maxwowo',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/maxwo',
  },
  {
    icon: faBlog,
    url: 'https://street.maxwowo.com/',
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
