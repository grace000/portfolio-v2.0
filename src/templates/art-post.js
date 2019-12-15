import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const ArtPostTemplate = ({data, pageContext}) => {
   const {next, prev} = pageContext
   const post = data.contentfulArtWork

    return (
      <Layout>
        <div>
          <Helmet title={post.title} />
  
          <div className="wrapper">
            
            <div className="section-headline">
              <div className="section-links">
                <div className="section-links-previous">
                  <h3>
                  { prev && 
                    <Link to={`/art/${prev.slug}`}>Previous</Link>
                  }
                  </h3>
                </div>
                <div className="section-links-next">
                  <h3>
                  { next && 
                    <Link to={`/art/${next.slug}`}>Next</Link>
                  }
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="art-post-content">
              <Img fixed={post.image.fixed} className="art-post-image"/>
              <div className="art-post-description-wrapper">
                <h2>{post.title}</h2>
              </div>
              
            </div>
          </div>
        </div>
    </Layout>
    )
}


export default ArtPostTemplate

export const query = graphql`
  query($title: String!){
    contentfulArtWork(title: { eq: $title }) {
      title
      image {
        id
        fixed(width: 450) {
            ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`