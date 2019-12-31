import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const Me = ({data}) => {
   const about = data.allContentfulPerson.edges[0].node
    console.log(about, "about here")
    return (
      <Layout>
        <div>
        <Helmet title={"Tiffani Elmore About"} />
        <div className="hero">
          <h1 className="heroHeadline">Blog</h1>
        </div>
            <div className="about-post-content">
                <div>
                    <Img fixed={about.image.fixed} className="about-post-image" style={{position:"relative", width:"100%"}}/>
                </div>
                    
                <div className="about-post-long-bio-wrapper">
                    <p className="about-post-long-bio">{about.longBio.longBio}</p>
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
