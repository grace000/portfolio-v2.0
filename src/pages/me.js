import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const Me = ({data}) => {
   const about = data.allContentfulPerson.edges[0].node

    return (
      <Layout>
        <div>
        <Helmet title={"Tiffani Elmore About"} />
        <div className="hero">
          <h1 className="heroHeadline">Me</h1>
        </div>
            <div className="about-content">
                <div>
                    <Img fixed={about.image.fixed} className="about-image" style={{position:"relative", width:"100%"}}/>
                </div>
                    
                <div className="about-long-bio-wrapper">
                    <p className="about-long-bio">{about.longBio.longBio}</p>
                </div>
            </div>
          </div>
    </Layout>
    )
}


export default Me

export const query = graphql`
query {
    allContentfulPerson {
      edges {
        node {
            longBio {
                longBio
            }
            image {
                fixed(width: 400) {
                    ...GatsbyContentfulFixed_tracedSVG
                }
            }
        }
      }
    }
  }
`
