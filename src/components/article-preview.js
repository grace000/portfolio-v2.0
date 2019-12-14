import React from 'react'
import { Link } from 'gatsby'

export default ({ article }) => (
  <div className="preview">
    <h3 className="previewTitle">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
