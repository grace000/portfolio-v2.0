import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Helmet title={"Tiffani Elmore Contact"} />
        <div className="hero">
          <h1 className="heroHeadline">Contact</h1>
        </div>
        <div className="wrapper">
            <form
                name="contact"
                method="post"
                action="/me"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    Your name:
                    <br />
                    <input className="contact-input-name" type="text" name="name" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    Your email:
                    <br />
                    <input className="contact-input-email" type="email" name="email" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    Message:
                    <br />
                    <textarea className="contact-textarea" name="message" onChange={handleChange} />
                </label>
                </p>
                <p>
                <button className="contact-button" type="submit">Send</button>
                </p>
            </form>
        </div>
    </Layout>
  )
}