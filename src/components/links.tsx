import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCamera, faFilePdf, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cls from '@maxwowo/cls'
import { FunctionComponent } from 'react'

import { Centered } from './centered'

const links = [
  {
    icon: faGithub,
    url: 'https://github.com/maxwowo'
  },
  {
    icon: faVideo,
    url: 'https://www.youtube.com/channel/UCkdzgKxdNJpgwR3ewxPMoqQ'
  },
  {
    icon: faCamera,
    url: 'https://www.instagram.com/maxwowowowo'
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/maxwo'
  },
  {
    icon: faFilePdf,
    url: '/resume.pdf'
  }
]

export const Links: FunctionComponent = () => (
  <Centered>
    {links.map(icon => (
      <a
        key={icon.url}
        href={icon.url}
        rel="noreferrer"
        target="_blank"
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
          'md:hover:scale-150'
        )}
      >
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    ))}
  </Centered>
)
