import React from 'react'
import { Link } from 'gatsby'
import { SocialIcon } from 'react-social-icons';
import Profile from '../images/profile.jpeg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>Full Stack Developer</h2>
    <img src={Profile}/>
    <p>I am a Portland-based web developer.</p>
    <Link to="/page-2/">View Projects</Link>
    <br/>
    <SocialIcon url='https://github.com/gpuett' />
    <SocialIcon url='https://www.linkedin.com/in/gpuett/' />
  </Layout>
)

export default IndexPage
