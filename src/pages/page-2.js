import React from 'react'
import { Link } from 'gatsby'
import Pour from '../images/Pour.png'
import meta from '../images/meta.png'
import jddb from '../images/jddb.png'
import board from '../images/board.png'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Projects</h1>
    <a href='https://github.com/gpuett/help-me-im-pour'><h3>Pour</h3></a>
    <img src={Pour} />
    <br/>
    <a href='https://github.com/gpuett/site-rebuild'><h3>MetaCritic Rebuild</h3></a>
    <img src={meta} />
    <h1>Collaborations</h1>
    <a href='https://github.com/gpuett/dating-app'><h3>JDDB</h3></a>
    <img src={jddb} />
    <a href='https://github.com/gpuett/boulderingGenerator'><h3>Build-a-Board</h3></a>
    <img src={board} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
