import React from 'react'
import SkillSection from '../components/SkillSec'

const Skill = () => {
  return (
    <div>
        <>
  <h1 className="subTitle mt-20 p-8">
    My <span>Skills</span>
  </h1>
  <div>
    <section className="skill">
      <div className="container1" id="skills">
        <h1 className="heading1 text-2xl">Technical Skills</h1>
        <section className="bar-graph bar-graph-horizontal bar-graph-one w-full ml-48">
          <div className="bar-one">
            <span className="year">
              HTML <i className="bx bxl-html5" style={{ color: "#f05c49" }} />
            </span>
            <div className="bar" data-percentage="85%" />
          </div>
          <div className="bar-two">
            <span className="year">
              CSS <i className="bx bxl-css3" style={{ color: "#f05c49" }} />
            </span>
            <div className="bar" data-percentage="85%" />
          </div>
          <div className="bar-three">
            <span className="year">
              Java <br /> script
              <i className="bx bxl-javascript" style={{ color: "#f05c49" }} />
            </span>
            <div className="bar" data-percentage="80%" />
          </div>
          <div className="bar-four">
            <span className="year">
              React
              <i className="bx bxl-react" style={{ color: "#f05c49" }} />
            </span>
            <div className="bar" data-percentage="80%" />
          </div>
        </section>
      </div>
    </section>
  </div>
</>

        <SkillSection/>
    </div>
  )
}

export default Skill