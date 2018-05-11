import React from 'react';

import styles from './about-us.module.css';


const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () => (
  <div>
    <h1>About Us</h1>
    <User
      username="John Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="lorem ipsum"
    />
  </div>
);