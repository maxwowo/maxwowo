import React from 'react';

import Particles from '../../components/Particles/Particles';
import Display from './Display/Display';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <div className={styles.LandingPage}>
    <Particles />
    <Display />
  </div>
);

export default LandingPage;
