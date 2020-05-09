import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Footer from '../components/footer'

const Me = ({ data }) => {
  const about = data.allContentfulPerson.edges[0].node

  return (
    <Layout>
      <Helmet title={'Tiffani Elmore About'} />
      <div className="hero">
        <h1 className="heroHeadline">Me</h1>
      </div>
      <div className="wrapper">
        <div className="about-content">
          <Img
            fixed={about.image.fixed}
            className="about-image"
            style={{ position: 'relative', width: '100%' }}
          />
          <div
            className="about-long-bio-wrapper"
            dangerouslySetInnerHTML={{
              __html: about.longBio.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
      <Footer />
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
            childMarkdownRemark {
              html
            }
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
