import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import ProjectList from './components/Projects/ProjectList';
import ProjectInfo from './components/Projects/ProjectInfo';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio';
import Modal from './components/Modal/Modal';
import './sass/main.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpenModal: false,
      projectInfo: [],
    }

  }

  componentDidMount() {
     document.addEventListener("click", this.handleClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickDocument);
  }

  handleClickDocument = (e) => {
    if (e.target.classList.contains("modal") ) {
        this.setState({ isOpenModal: false });
        document.querySelector('body').classList.remove('no-scroll');
    }    
  }

  handleClick = (id) => {
      this.setState({ isOpenModal: true });
      document.querySelector('body').classList.add('no-scroll');
      this.getInfo(id);    
  }

  getInfo = (id) => {
     const data = portfolioData.projects.filter( proj => ( proj.id === id ));
     this.setState({ projectInfo: data})
  }  


  render() {

  const data = portfolioData;
  const { projectInfo, isOpenModal }  = this.state;
  let projectList, projectItem;
  projectList = data.projects.map((proj, key) => {
    return (
        <ProjectList 
          key={ proj.id}
          {...proj}
          handleClickProject={this.handleClick.bind(this, proj.id)}
        />
      )
  });

  projectItem = projectInfo.map((info, i) => (
      <ProjectInfo 
        key={i}
        {...info}
      />
  ))  

    return (
      <Fragment>
       <Header portfolioData={ portfolioData } />
        <main className="site-main" id="home">
          <Hero portfolioData={ portfolioData } id="home" />          
          <Projects >
            {projectList}
          </Projects>
          <Skills portfolioData={ portfolioData }/>
          <Timeline portfolioData={ portfolioData } />
          <Contact />
            {
              isOpenModal &&
               <Modal>
                  { projectItem }
               </Modal>        
            }     
        </main> 
       <Footer />
      </Fragment>
    );   
  }

}

export default App;
