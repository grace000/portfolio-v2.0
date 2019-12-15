import React from 'react'

export default ({ data }) => (
  <div className="hero">
    <div className="heroDetails">
      <p className="heroIntro">{data.intro}</p>
      <h1 className="heroHeadline">{data.firstName}</h1>
      <h1 className="heroHeadline">{data.lastName}.</h1>
      <p className="heroBio">{data.shortBio.shortBio}</p>
    </div>
  </div>
)
