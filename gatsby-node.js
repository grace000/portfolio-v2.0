const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createBlogPosts = new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
    return resolve()
  })

  const createArtPosts = new Promise((resolve, reject) => {
    const artPost = path.resolve('./src/templates/art-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulArtWork {
              edges {
                node {
                  title
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulArtWork.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/art/${post.node.title}/`,
            component: artPost,
            context: {
              slug: post.node.title
            },
          })
        })
      })
    )
    return resolve()
  })

  return Promise.all([
    createBlogPosts,
    createArtPosts
  ])

}
