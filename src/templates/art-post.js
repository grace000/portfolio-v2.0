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
            { prev && 
                <Link to={`/art/${prev.slug}`}>Previous</Link>
            }
            { next && 
                <Link to={`/art/${next.slug}`}>Next</Link>
            }
            <h1 className="section-headline">{post.title}</h1>
            <Img fixed={post.image.fixed} />
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