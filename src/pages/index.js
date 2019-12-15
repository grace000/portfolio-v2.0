import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

const IndexRoot = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const [author] = data.allContentfulPerson.edges
  
  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
      </div>
    </Layout>
  )
}

export default IndexRoot

export const query = graphql`
  query {
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          firstName
          lastName
          intro
          shortBio {
            shortBio
          }
          title
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
