import cls from '@jikanban/cls'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Display from '../components/Display'
import Particles from '../components/Particles'

const Landing: NextPage = () => (
  <Fragment>
    <NextSeo
      description="Software Engineer at Atlassian. My specialties include googling error messages and modifying code copied from Stack Overflow. Little known fact: also dope on the mic."
      title="¯\_(ツ)_/¯"
    />
    <div className={cls('h-screen', 'bg-black')}>
      <Particles />
      <Display />
    </div>
  </Fragment>
)

export default Landing
