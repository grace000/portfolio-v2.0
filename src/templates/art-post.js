import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PaypalButton from '../components/paypal-button'


const ArtPostTemplate = ({data, pageContext}) => {
   const {next, prev} = pageContext
   const post = data.contentfulArtWork

    return (
      <Layout>
        <div>
          <Helmet title={post.title} />
  
          <div className="art-post-wrapper">
            
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
              <div>
                  <Img fixed={post.image.fixed} className="art-post-image" style={{position:"relative", width:"100%"}}/>
              </div>
                
              <div className="art-post-description-wrapper">
                <h2 className="art-post-title">{post.title}</h2>
                <h3 className="art-post-price">{post.price}</h3>
                <p className="art-post-description">{post.description.description}</p>
                {(post.paypalButtonValue && post.isAvailable) && <PaypalButton paypalKey={post.paypalButtonValue}/>}
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
        fixed(width: 400) {
            ...GatsbyContentfulFixed_tracedSVG
        }
      }
      description {
        description
      }
      price
      paypalButtonValue
      isAvailable
    }
  }
`