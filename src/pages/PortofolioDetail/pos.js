import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

import Slider from "react-slick"

import pos1 from '../../images/home/portfolio/pos-1.png'
import pos2 from '../../images/home/portfolio/pos-2.png'
import pos3 from '../../images/home/portfolio/pos-4.png'
import pos4 from '../../images/home/portfolio/pos-6.png'
import pos5 from '../../images/home/portfolio/pos-9.png'
import pos6 from '../../images/home/portfolio/pos-11.png'
import pos7 from '../../images/home/portfolio/pos-13.png'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay:true
};


let gallery_list = [pos1, pos2, pos3, pos4, pos5, pos6, pos7
]
const Pos = () => (
  <Layout idLayout='pos-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Point of Sales</div>
          <div className="detail">The fastest way to record book reservation</div>
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
                <ProjectIcon fill='#59ade2'></ProjectIcon>
                </div>
                <div className="name-detail-wrap">
                  <div className="name">Point of sales
                  </div>
                  <div className="type">Hotel Application </div>
                  <div className="year">Middle 2017</div>
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
                 Implement the system for tablet view
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="template-gallery">
          

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
            <div className="label-box">PSD</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">React JS</div>
            <div className="label-box">Redux</div>
            <div className="label-box">HTML</div>
            <div className="label-box">SCSS</div>
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
            Hotel Point of Sales is a platform for Hotel Front Office to manage the reservation list, create a booking, and do night audit. This application provides 2 languages, Bahasa and english. 
            <br/><br/>
            What I do? I development this page with the team . 
            <ul>
              <li>Create intial application</li>
              <li>Set function to connect with the API</li>
              <li>Generate Invoice in PDF</li>
            </ul>
            Built using React JS, redux, and SCSS. The responsive view we using a desktop, mobile, tablet materials from rails.
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Pos
