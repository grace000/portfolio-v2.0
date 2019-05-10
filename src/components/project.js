import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './project.module.css'

export default ({ project }) => (
    <div style={styles.project}>
        <div style={styles.projectDetails}>
            <h1>{project.projectHeadline}</h1>
            <p>{project.description}</p>
        </div>
        <div style={styles.projectImageWrapper}>
            <Img className={styles.projectImage} alt={data.name} fluid={data.heroImage.fluid} />
            <div style={styles.projectLinks}>
                {project.map(({node}) => {
                    return (
                        <Button 
                            href={project.link}
                            text={project.source}
                        />
                    )
                })}
            </div>
        </div>
    </div>
)