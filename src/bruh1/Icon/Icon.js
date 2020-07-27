import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Icon.module.css';

const Icon = (
  {
    icon,
    ...rest
  }
) => (
  <FontAwesomeIcon
    icon={icon}
    className={styles.Icon}
    {...rest}
  />
);

export default Icon;
