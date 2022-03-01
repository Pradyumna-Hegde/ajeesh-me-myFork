import { useEffect } from 'react'
import AOS from 'aos'
import { contact } from '../../portfolio'
import "aos/dist/aos.css"
import './Contact.css'

const Contact = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])
  if (!contact.email) return null

  return (
    <section data-aos="fade-up"  className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <form id="submitForm" >       
        <input name="name" type="text" className="feedback-input" placeholder="Name" />   
        <input name="email" type="email" className="feedback-input" placeholder="Email" />
        <textarea name="text" className="feedback-input" placeholder="Comment" />

        <button type="submit" className='submit-btn btn btn--outline'>
          Connect me  
        </button>
      </form>
    </section>

 
  )
}

export default Contact
