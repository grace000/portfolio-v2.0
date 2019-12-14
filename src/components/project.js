import React from 'react'
import Img from 'gatsby-image'

export default ({ project }) => (
    <div style="project">
        <div style="projectDetails">
            <h1>{project.projectHeadline}</h1>
            <p>{project.description}</p>
        </div>
        <div style="projectImageWrapper">
            <Img className="projectImage" alt={data.name} fluid={data.heroImage.fluid} />
            <div style="projectLinks">
                {project.map(({node}) => {
                    return (
                        <Button 
                            href={node.project.link}
                            text={node.project.source}
                        />
                    )
                })}
            </div>
        </div>
    </div>
)