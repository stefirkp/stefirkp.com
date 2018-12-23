import React from 'react'

import Layout from '../components/layout'
import Intro from '../components/main/Intro'
import About from '../components/main/About'
import Skill from '../components/main/Skill'
import Portofolio from '../components/main/Portofolio'

const IndexPage = () => (
  <Layout>
    <Intro/>
    <About/>
    <Skill/>
    <Portofolio/>
  </Layout>
)

export default IndexPage
