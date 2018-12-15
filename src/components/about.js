import React from 'react'
import Img from 'gatsby-image'

import styles from './about.module.css'

export default ({  }) => (
  <div className={styles.about}>
    <Img className={styles.aboutImage} alt={data.name} fluid={data.heroImage.fluid} />
    <div className={styles.aboutDetails}>
      <h3 className={styles.aboutHeadline}>About</h3>
      <p>{data.longBio.longBio}</p>
    </div>
  </div>
)
