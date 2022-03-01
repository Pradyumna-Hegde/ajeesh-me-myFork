import { useEffect } from 'react'
import uniqid from 'uniqid'
import AOS from 'aos'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import "aos/dist/aos.css"


const Projects = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div data-aos="fade-up" className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer  key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
