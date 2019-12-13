import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from "../components/layout"
import Img from 'gatsby-image'

class ArtIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArtWork.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
            <h1 className={styles.heroHeadline}>Art</h1>
          </div>
          <div className="artwork-wrapper">
            <ul className="artwork-list">
              {posts.map(({ node }) => {
                return (
                    <div key={node.title} className="artwork-list-item">
                        <Link to={`/art/${node.slug}`}>
                            <p className="artwork-title">{node.title}</p>
                            <Img className="artwork-image" fixed={node.image.fixed} />
                        </Link>
                    </div>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArtIndex

export const query = graphql`
  query {
    allContentfulArtWork (
        sort: {fields: createdAt, order: ASC}){
      edges {
        node {
          title
          slug
          image {
            id
            fixed(width: 150) {
                ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
