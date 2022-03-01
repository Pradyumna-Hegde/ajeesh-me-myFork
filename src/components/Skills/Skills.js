import { useEffect } from 'react'
import uniqid from 'uniqid'
import AOS from 'aos'
import "aos/dist/aos.css"
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])
  if (!skills.length) return null

  return (
    <section  data-aos="fade-up"  className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
