import classNames from 'classnames'
import { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

import Display from '../components/Display'
import Particles from '../components/Particles'

const Landing: NextPage = () => (
  <Fragment>
    <Head>
      <title>¯\_(ツ)_/¯</title>
    </Head>
    <div className={classNames('h-screen', 'bg-black')}>
      <Particles />
      <Display />
    </div>
  </Fragment>
)

export default Landing
