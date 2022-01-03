
import { useContext } from 'react';

import UserContext from '../UserContext';

import styles from './HelloWorld.module.css';

function HelloWorld() {
  const { name } = useContext(UserContext);
  return (
    <h2 className={styles.title}>Hello {name}</h2>
  )
}

export default HelloWorld;
