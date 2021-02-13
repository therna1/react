import React from 'react';
import styles from './container.scss';

const Container = props => (
    <div className = {styles.component}>
      {props.children}
    </div>
  );

export default Container;