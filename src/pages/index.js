import React from 'react'
import { Link } from 'gatsby'
import Profile from '../images/image1.jpeg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Full Stack Developer</h1>
    <img src={Profile}/>
    <p>I like creating pleasant projects that are fun and easy to use.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
