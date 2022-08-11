import React from 'react'
import PageTitle from '../../components/pagetitle/PageTitle'
import SectionTitle from '../../components/sectiontitle/SectionTitle'
import SkillTeamcard from '../../components/skillteamcard/SkillTeamcard'
import './skillteam.scss'
const SkillTeam = () => {
  return (
    <div className='skillteam container'>
        <SectionTitle  heading={'Skill Team'} subheading={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'} />
        <div className="grid">
            {
                [1,2,3].map((item)=>(
                    <div className="item">
                        <SkillTeamcard/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SkillTeam