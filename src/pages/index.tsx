import classNames from 'classnames'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Display from '../components/Display'
import Particles from '../components/Particles'

const Landing: NextPage = () => (
  <Fragment>
    <NextSeo
      description="4th year Software Engineering student at UNSW. My specialties include googling error messages and modifying code copied from Stack Overflow. Little known fact: also dope on the mic."
      title="Max Wo"
    />
    <div className={classNames('h-screen', 'bg-black')}>
      <Particles />
      <Display />
    </div>
  </Fragment>
)

export default Landing
