import React from 'react'

import Slider from "react-slick"

import Layout from '../../components/layout'

import user1 from '../../images/portofolio-detail/pricentric/user-1.png'
import user2 from '../../images/portofolio-detail/pricentric/user-2.png'
import user3 from '../../images/portofolio-detail/pricentric/user-3.png'
import admin1 from '../../images/portofolio-detail/pricentric/admin-1.png'
import admin2 from '../../images/portofolio-detail/pricentric/admin-2.png'
import admin3 from '../../images/portofolio-detail/pricentric/admin-3.png'
import admin4 from '../../images/portofolio-detail/pricentric/admin-4.png'
import admin5 from '../../images/portofolio-detail/pricentric/admin-5.png'
import admin6 from '../../images/portofolio-detail/pricentric/admin-6.png'
import admin7 from '../../images/portofolio-detail/pricentric/admin-7.png'
import admin8 from '../../images/portofolio-detail/pricentric/admin-8.png'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true
};
const Pricentric = () => (
  <Layout idLayout='pricentric-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="top-wrap">
          <div className="bg-top"></div>
          <div className="col-title">
            <div className="big"></div>
            <div className="detail">A report application for pharmaceutical</div>
          </div>
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
                  fill='#0f48b1' />
                  <circle fill='#FC645F' cx='10' cy='8' r='3' />
                  <circle fill='#FDBD41' cx='21' cy='8' r='3' />
                  <circle fill='#35CC4B' cx='32' cy='8' r='3' />
                  <path d='M100,16 L100,93.9926375 C100,97.3104122 97.312319,100 94.0069352,100 L5.99306484,100 C2.68318653,100 0,97.3120937 0,93.9926375 L0,16 L100,16 Z'
                  fill='#FFF' />
                  <rect fill='#F3F3F3' y='16' width='100' height='12' />
                  <rect fill='#343434' x='10' y='19.5' width='17' height='2' rx='1' />
                  <circle fill='#343434' cx='89' cy='20.5' r='1' />
                  <rect fill='#0f48b1' x='10' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#0f48b1' x='18' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='32' width='40' height='8' rx='4' />
                  <rect fill='#D7D7D7' x='10' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='47' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='43' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='38' y='43' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='66' y='43' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='51' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='57' width='28' height='6' rx='3' />
                  <rect fill='#D7D7D7' x='10' y='66' width='74' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='70' width='79' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='74' width='71' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='78' width='74' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='84' width='28' height='6' rx='3' />
              </svg>

                </div>
                <div className="name-detail-wrap">
                  <div className="name">Pricentric</div>
                  <div className="type">Report Application</div>
                  <div className="year">June 2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row-label">
              <div className="label-row">Role</div>
              <div className="row">
                Front End Developer
              </div>
            </div>
            <div className="row-label">
              <div className="label-row">Goal</div>
              <div className="row">
                 Create business reporting for desktop view
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="gallery-frame">
        <Slider {...settings}>
          <div className="slide-img"> <img src={user1} alt="Login for user"/></div>
          <div className="slide-img"> <img src={user2} alt="User page"/></div>
          <div className="slide-img"> <img src={user3} alt="User page"/></div>
          <div className="slide-img"> <img src={admin1} alt="Admin menu"/></div>
          <div className="slide-img"> <img src={admin2} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin3} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin4} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin5} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin6} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin7} alt="Admin page"/></div>
          <div className="slide-img"> <img src={admin8} alt="Admin page"/></div>
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
            <div className="label-box">Zeplin</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">HTML</div>
            <div className="label-box">CSS/SCSS</div>
            <div className="label-box">SVG</div>
            <div className="label-box">Bootstrap</div>
            <div className="label-box">Bootstrap Select</div>
            <div className="label-box">Bootstrap Tag Input</div>
            <div className="label-box">JQuery</div>
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
              This project develop by team, 3 Front end, 1 UI/UX, & 1 Project manager. 
              The application have 2 level access user, admin & non admin.
              <br/>
              <br/>
              <div>
                We use Bootstrap Tag Input for search bar. When user typing then enter, it will be create a tag, so user can search word by word. 
                Here the example : 
                <div className='example-boot-tag'></div>
              </div>
              <br/>
              <div>
                Another requirement, the height table should be responsive with the height resolution. We use jquery to detect height screen. 

                <div className='example-height'></div>

              </div>
              
              <br/>We develop this project by 3 week (43 pages for admin access & 4 pages for user access).

            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Pricentric
