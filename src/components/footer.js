import React from "react";
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const Footer = ({data}) => {
    const icons = data.allContentfulSocialMedia.edges
    return (
        <div className="footer-container">
            <div className="footer-social-media-wrapper">
                <ul>
                {icons.map(({ node}) => {
                    return (
                        <li className="navigation-item">
                            <a className="footer-social-media-link" key={node.id} href={node.link} target="_blank">
                                <Img fixed={node.socialMediaImage.fixed} />
                            </a>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
            allContentfulSocialMedia {
              edges {
                node {
                    socialMediaImage {
                        fixed(width: 30) {
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                    id
                    link
                  }
              }
            }
          }
      `}
      render={data => <Footer data={data} {...props} />}
    />
  )