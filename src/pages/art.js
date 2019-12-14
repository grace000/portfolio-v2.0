import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Img from 'gatsby-image'


const ArtIndex = ({data}) => {
    const posts = data.allContentfulArtWork.edges

    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <Helmet title={"artwork"} />
          <div className="hero">
            <h1 className="heroHeadline">Art</h1>
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
            fluid {
                aspectRatio
                src
            }
            fixed(width: 150) {
                ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
