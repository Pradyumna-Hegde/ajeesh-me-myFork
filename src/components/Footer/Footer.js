import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='/'
      className='link footer__link'
    >
      Created by Ajeesh &copy; all rights Reserved {new Date().getFullYear()}
    </a>
  </footer>
)

export default Footer
