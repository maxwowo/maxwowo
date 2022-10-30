import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCamera, faFilePdf, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cls from '@jikanban/cls'
import { FunctionComponent } from 'react'

import Centered from './Centered'

const icons = [
  {
    icon: faGithub,
    url: 'https://github.com/maxwowo',
  },
  {
    icon: faVideo,
    url: 'https://www.youtube.com/channel/UCkdzgKxdNJpgwR3ewxPMoqQ',
  },
  {
    icon: faCamera,
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
      <a
        key={icon.url}
        className={cls(
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
          'hover:scale-150',
        )}
        href={icon.url}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    ))}
  </Centered>
)

export default Icons
