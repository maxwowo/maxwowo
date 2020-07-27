import React from 'react';

import Display from '../../components/Display/Display';
import Particles from '../../components/Particles/Particles';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <div className={styles.LandingPage}>
    <Particles />
    <Display />
  </div>
);

export default LandingPage;
