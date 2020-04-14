import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

const Skills = (props) => {

  const data = props.portfolioData;
  let skillList;
  skillList = data.skills.map((s, i) => (
    <div className="col-2" key={i}>
      <div className="site-skill">
        <div className="site-skill__canvas-wrapper">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? s.percentage : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  className="site-skill__canvas"
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 2,
                  })}
                />
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="site-skill__text"> {s.name}</div>
      </div>
    </div>
  ));

  return (
    <section className="site-section" id="skills">
      <div className="container">
        <div className="site-section__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
            <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }}></polyline>
          </svg>
        </div>
        <h1 className="site-heading"> Skills  </h1>
        <div className="row">
          {skillList}
        </div>
      </div>
    </section>

  )
}

export default Skills;