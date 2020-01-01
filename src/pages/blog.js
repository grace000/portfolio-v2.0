import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'
import Footer from '../components/footer'

const BlogIndex = ({data}) => {
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={"Tiffani Elmore Blog"} />
        <div className="hero">
          <h1 className="heroHeadline">Blog</h1>
        </div>
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
    


export default BlogIndex

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
