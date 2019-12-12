import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import heroStyles from '../components/hero.module.css'

class ArtPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArtWork')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <Img fluid={post.image.fluid} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArtPostTemplate

export const query = graphql`
  query {
    contentfulArtWork {
      title
      image {
        id
        fluid(maxWidth: 200, maxHeight: 200, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`