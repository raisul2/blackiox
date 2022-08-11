import React from 'react'
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../sections/about-section/About'
import FindWork from '../../sections/findwork/FindWork'
import FunFacts from '../../sections/funfacts/FunFacts'
import SkillTeam from '../../sections/skillteam/SkillTeam'
import Testomonial from '../../sections/testomonial/Testomonial'

const AboutPage = () => {
  return (
    <div>
    <PageTitle pagetitle={'AboutPage'} />
      <About/>
      <FunFacts/>
      <FindWork/>
      <SkillTeam/>
      <Testomonial/>
    </div>
  )
}

export default AboutPage


