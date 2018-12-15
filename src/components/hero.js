import React from 'react'
import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroDetails}>
      <p className={styles.heroIntro}>{data.intro}</p>
      <h1 className={styles.heroHeadline}>{data.firstName}</h1>
      <h1 className={styles.heroHeadline}>{data.lastName}.</h1>
      <p className={styles.heroBio}>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
