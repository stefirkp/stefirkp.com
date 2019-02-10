import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

import Slider from "react-slick"

import pms1 from '../../images/home/portfolio/pms-1.png'
import pms2 from '../../images/home/portfolio/pms-3.png'
import pms3 from '../../images/home/portfolio/pms-4.png'
import pms4 from '../../images/home/portfolio/pms-5.png'
import pms5 from '../../images/home/portfolio/pms-6.png'
import pms6 from '../../images/home/portfolio/pms-7.png'
import pms7 from '../../images/home/portfolio/pms-8.png'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay:true
};


let gallery_list = [pms1,pms2,pms3,pms4,pms5,pms6,pms7
]


const Pms = () => (
  <Layout idLayout='pms-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Property Management System</div>
          <div className="detail">The fastest way to help hotelier manage room</div>
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
                  <ProjectIcon fill='#e6a65c'></ProjectIcon>
                </div>
                <div className="name-detail-wrap">
                  <div className="name">PMS
                  </div>
                  <div className="type">Management System</div>
                  <div className="year">June 2018</div>
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
                 Implement Single Page Application for management system with responsive view minimum for tablet
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="template-gallery capt-gall">
        <Slider {...settings}>
          {gallery_list.map((img,key)=>{
            return(
              <div className="slide-img"> <img src={img} alt={"img"+key}/></div>
            )
          })}
        </Slider>
        </div>

      </div>
      <div className="main-detail-wrap">

        <div className="row-label">
          <div className="label-row">Tools</div>
          <div className="row label-box-wrap">
            <div className="label-box">Figma</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">React JS</div>
            <div className="label-box">Redux</div>
            <div className="label-box">Node</div>
            <div className="label-box">HTML</div>
            <div className="label-box">SCSS</div>
            <div className="label-box">Git</div>
          </div>
        </div>
            
        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
            Property Management System is a local hotel administration system used for reservation, availability and occupancy management, check-in/out, images, guest profiles, report generation etc. This application is used in-house (in an individual hotel) to control the onsite property activities.
            <br/><br/>
            The PMS is a merge between hotel point-of-sale (POS) and the CRS or we called POS version 2. Hotel need simple management in one application, thats the reason PMS create. 
            <br/><br/>
            
            What I do? Create initial application, implement some page, create dropdown search bar using react component, and another feature.
            This application is Single Page Application, we call the api using Redux.

            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  </Layout>
)

export default Pms
