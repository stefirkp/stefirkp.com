import React from 'react'

const Footer = () => (
  <footer id='my-footer'>
    Whats next ? 
    <div className="closing-txt">Pleasure to meet awesome people on interesting projects. <br/> Need a hand? I have two
    </div>
    <div className="photo"></div>
    <span className="email"></span>
    <a href="mailto:stefirkp@gmail.com">stefirkp@gmail.com </a>
    <div className="socmed-wrap">
      <a className='a-socmed' id='li' href={'https://www.linkedin.com/in/stefi-rosadi-67721993/'} target='_blank'  rel="noopener noreferrer"></a>
      <a className='a-socmed' id='fb' href={'https://web.facebook.com/stefy.fhy'} target='_blank'  rel="noopener noreferrer"></a>
      <a className='a-socmed' id='ig' href={'https://www.instagram.com/stepyroroo/'} target='_blank'  rel="noopener noreferrer"></a>
    </div>

    <span className="copy">Copyright @2019</span>
  </footer>
)

export default Footer
