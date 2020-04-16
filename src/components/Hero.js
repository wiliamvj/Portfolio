import React from 'react';
import introLogo from '../intro-logo.svg';
import Particles from 'react-particles-js';

const Hero = (props) => {

  const data = props.portfolioData;

  return (
    <section className="site-intro site-intro--with-clipmask" >
      <Particles className="site-intro__canvas" />

      <div className="container">
        <div className="site-intro__wrapper">

          <div className="site-intro__logo-wrapper">
            <img src={introLogo} alt="" className="site-intro__logo" />
          </div>

          <div className="site-intro__main">
            <div className="site-intro__intro">
              <h2 className="site-intro__name"> Hi. I'm {data.name} </h2>
              <h2 className="site-intro__heading"> I'm a {data.role}. </h2>
              <h3 className="site-intro__primary"> {data.intro} </h3>
              <div className="site-intro__action">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;