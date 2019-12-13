import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './blog-post.module.css'
import heroStyles from '../components/hero.module.css'

const BlogPostTemplate = ({data}) => {
  const post = data.contentfulBlogPost

  return (
    <Layout>
      <div>
        <Helmet title={post.title}/>
        <div className={heroStyles.hero}>
          <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p style={{
            display: "block",
          }}>
            {post.publishDate}
          </p>
          <div className={styles.articleDescription}
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
} 

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`