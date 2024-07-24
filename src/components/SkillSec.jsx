import React from 'react';

const SkillSection = () => {
  return (
    <div className="container1 ml-72">
      <h1 className="heading1 profession text-2xl ">Professional Skills</h1>
      <div className="radialBars gap-4 ">
        <SkillPie className="" skill="Creativity" percentage={80} color="#f05c49" />
        <SkillPie skill="Communication" percentage={80} color="#f05c49" />
        <SkillPie skill="Problem Solving" percentage={85} color="#f05c49" />
        <SkillPie skill="Team Work" percentage={90} color="#f05c49" />
        <SkillPie skill="Hard Work" percentage={90} color="#f05c49" />
      </div>
    </div>
  );
};

const SkillPie = ({ skill, percentage, color }) => {
  const style = { '--p': percentage, '--c': color };

  return (
    <div className="pie animate" style={style}>
      {percentage}%
      <div className="text">{skill}</div>
    </div>
  );
};

export default SkillSection;
