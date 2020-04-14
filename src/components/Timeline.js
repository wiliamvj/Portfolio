import React from 'react';

const Timeline = (props) => {
  const data = props.portfolioData;
  let expList;
  expList = data.workExp.map((exp, i) => (
    <div className="stepper__list" key={i}>
      <div className="stepper__item">
        <div className="stepper__step">
          <div className="stepper__timeline">
            <div className="stepper__circle"> </div>
            <div className="stepper__timeline-heading"> {exp.title} </div>
          </div>
        </div>
        <div className="stepper__info">
          <div className="stepper__body">
            <h3 className="stepper__title"> {exp.company}</h3>
            <div className="stepper__sub"> {exp.description} </div>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <section className="site-section  site-section--with-background" id="work">
      <div className="container">
        <div className="site-section__icon stroke-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
            <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }}></polyline>
          </svg>
        </div>
        <h1 className="site-heading text-white"> Works  </h1>
        <div className="stepper">
          {expList}
        </div>
      </div>
    </section>
  )
}



export default Timeline;