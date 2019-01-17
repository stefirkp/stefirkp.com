import React from 'react'

import Slider from "react-slick"

import Layout from '../../components/layout'

import arsip1 from '../../images/portofolio-detail/arsip/1.png'
import arsip2 from '../../images/portofolio-detail/arsip/2.png'
import arsip3 from '../../images/portofolio-detail/arsip/3.png'
import arsip4 from '../../images/portofolio-detail/arsip/4.png'
import arsip5 from '../../images/portofolio-detail/arsip/5.png'
import arsip6 from '../../images/portofolio-detail/arsip/6.png'
import arsip7 from '../../images/portofolio-detail/arsip/7.png'
import arsip8 from '../../images/portofolio-detail/arsip/8.png'
import arsip9 from '../../images/portofolio-detail/arsip/9.png'
import arsip10 from '../../images/portofolio-detail/arsip/10.png'
import arsip11 from '../../images/portofolio-detail/arsip/11.png'
import arsip12 from '../../images/portofolio-detail/arsip/12.png'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true
};
const ArchiveLetter = () => (
  <Layout idLayout='archive-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="top-wrap">
          <div className="bg-top"></div>
          <div className="col-title">
            <div className="big">Informatics Faculty Letter Archive</div>
            <div className="detail">An application to record incoming letter</div>
          </div>
          <div className="col-bg-pict-help"></div>
          <div className="col-pict"></div>        
        </div>
      </div>
      <div className="main-detail-wrap">
        <div className="detail-card">
          <div className="col-2" id='project-name-detail'>
            <div className="row-label">
              <div className="label-row">Project</div>
              <div className="row">
                <div className="pict-project">
                <svg viewBox='0 0 100 100'>
                  <path d='M5.99306484,0 L94.0069352,0 C97.3168135,0 100,2.67804027 100,6.00333095 L100,16 L0,16 L0,6.00333095 C0,2.68778282 2.68768095,0 5.99306484,0 Z'
                  fill='#701807' />
                  <circle fill='#FC645F' cx='10' cy='8' r='3' />
                  <circle fill='#FDBD41' cx='21' cy='8' r='3' />
                  <circle fill='#35CC4B' cx='32' cy='8' r='3' />
                  <path d='M100,16 L100,93.9926375 C100,97.3104122 97.312319,100 94.0069352,100 L5.99306484,100 C2.68318653,100 0,97.3120937 0,93.9926375 L0,16 L100,16 Z'
                  fill='#FFF' />
                  <rect fill='#F3F3F3' y='16' width='100' height='12' />
                  <rect fill='#343434' x='10' y='19.5' width='17' height='2' rx='1' />
                  <circle fill='#343434' cx='89' cy='20.5' r='1' />
                  <rect fill='#701807' x='10' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#701807' x='18' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#701807' x='10' y='32' width='40' height='8' rx='4' />
                  <rect fill='#D7D7D7' x='10' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='47' width='24' height='2' rx='1' />
                  <rect fill='#701807' x='10' y='43' width='24' height='2' rx='1' />
                  <rect fill='#701807' x='38' y='43' width='24' height='2' rx='1' />
                  <rect fill='#701807' x='66' y='43' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='51' width='24' height='2' rx='1' />
                  <rect fill='#701807' x='10' y='57' width='28' height='6' rx='3' />
                  <rect fill='#D7D7D7' x='10' y='66' width='74' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='70' width='79' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='74' width='71' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='78' width='74' height='2' rx='1' />
                  <rect fill='#701807' x='10' y='84' width='28' height='6' rx='3' />
              </svg>

                </div>
                <div className="name-detail-wrap">
                  <div className="name">Letter Archive</div>
                  <div className="type">Internship</div>
                  <div className="year">Des 2014</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row-label">
              <div className="label-row">Role</div>
              <div className="row">
                Web Developer
              </div>
            </div>
            <div className="row-label">
              <div className="label-row">Goal</div>
              <div className="row">
                 Create application to record incoming letter and deliver to lecturer
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="gallery-frame">
        <Slider {...settings}>
          <div className="slide-img"> <img src={arsip1} alt="arsip1"/></div>
          <div className="slide-img"> <img src={arsip2} alt="arsip2"/></div>
          <div className="slide-img"> <img src={arsip3} alt="arsip3"/></div>
          <div className="slide-img"> <img src={arsip4} alt="arsip4"/></div>
          <div className="slide-img"> <img src={arsip5} alt="arsip5"/></div>
          <div className="slide-img"> <img src={arsip6} alt="arsip6"/></div>
          <div className="slide-img"> <img src={arsip7} alt="arsip7"/></div>
          <div className="slide-img"> <img src={arsip8} alt="arsip8"/></div>
          <div className="slide-img"> <img src={arsip9} alt="arsip9"/></div>
          <div className="slide-img"> <img src={arsip10} alt="arsip10"/></div>
          <div className="slide-img"> <img src={arsip11} alt="arsip11"/></div>
          <div className="slide-img"> <img src={arsip12} alt="arsip12"/></div>
        </Slider>
        </div>
      </div>

      <div className="main-detail-wrap">
        <div className="row-label">
          <div className="label-row">Style</div>
          <div className="row">
            <div className="col-1 example-font">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </div>
            <div className="col-style">
              <div className="col-1 font-style">
                <div className="row light">Rubik regular</div>
                <div className="row bold">Rubik bold</div>
              </div>
              <div className="col-style">
                <div className="color-use">
                  <span className='color-circle' id='primary-color'></span>
                  <span className='color-circle' id='second-color'></span>
                  <span className='color-circle' id='third-color'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-label">
          <div className="label-row">Tools</div>
          <div className="row label-box-wrap">
            <div className="label-box">XAMPP</div>
            <div className="label-box">MySQL</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">HTML</div>
            <div className="label-box">CSS</div>
            <div className="label-box">CakePHP</div>
            <div className="label-box">Bootstrap</div>
            <div className="label-box">AJAX</div>
            <div className="label-box">JQuery</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
                Develop in a team, 4 member. 
                This application implement for Informatics Faculty of Kristen Duta Wacana University. 

                <br/>
                <br/>
                
                The main function are to record incomming and outcomming letter in Informatics Faculty. Change the traditional way to digital.
                Every letter can deliver to lecturer as soon as posible by this application by receiving email.
                <br/><br/>
                Beside that student can request letter recomendation from lecturer by this application. 
                If the letter already done, the student get email to take the letter.
                <br/>
                This help the front office to record all letter come and out. 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default ArchiveLetter
