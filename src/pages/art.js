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
                        <article>
                            <Link to={`/art/${node.slug}`} style={{display:"block", width: "100%", height: "100%" }}>
                                <figure style={{
                                    display:"block",
                                    height:"100%",
                                    width: "100%",
                                    maxHeight: "none",
                                    maxWidth: "none",
                                    textAlign: "center",
                                    top: 0,
                                    right:0,
                                    bottom: 0,
                                    left:0,
                                    overflow: "hidden",
                                    margin: 0,
                                }}>
                                    <Img className="artwork-image" fixed={node.image.fixed} 
                                        style={{
                                            position:"relative",
                                            left: 0,
                                            width: "375px",
                                            height: "325px",
                                        }}
                                    />
                                </figure>
                            </Link>
                        </article>
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
            fixed(width: 375) {
                ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
