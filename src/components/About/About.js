import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter';
import Typewriter from 'typewriter-effect'
import { useEffect } from 'react'
import AOS from 'aos'
import { about } from '../../portfolio' ;
import './About.css'
import "aos/dist/aos.css" ;

const About = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'  data-aos="fade-right">
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name} </span>
        </h1>
      )}

      {role && <h2 className='about__role'>
      <Typewriter
        options={{
          strings: ['MERN stack Developer', 'CE student' ,"Freelancer"],
          autoStart: true,
          loop: true,
        }}
      />
      </h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume  
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon fontSize="large" />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon fontSize="large"/>
              </a>
            )}

             {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon fontSize="large"/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
