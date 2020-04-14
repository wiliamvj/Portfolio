import React from 'react';

const ProjectList = ({ handleClickProject, imageUrl, title, link }) => {
  return (
          <div className="col-4" >
            <div className="site-project" onClick={ handleClickProject }>
              <div className="site-project__cover">
                <div className="site-project__img" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
                <div className="site-project__overlay">
                  <div className="site-project__info">
                    <a href="javascript:void(0)" onClick={ handleClickProject } className="btn btn-outline-white btn-radius btn-md" type="button"> Learn More </a>                  
                  </div>
                </div>
              </div>
            </div>
            <div className="site-project__name" onClick={ handleClickProject }>{ title } </div>
          </div>
  )
}

export default ProjectList;