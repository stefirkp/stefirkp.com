import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

import Slider from "react-slick"

import fnb1 from '../../images/home/portfolio/fnb-0.png'
import fnb2 from '../../images/home/portfolio/fnb-1.png'
import fnb3 from '../../images/home/portfolio/fnb-2.png'
import fnb4 from '../../images/home/portfolio/fnb-5.png'
import fnb5 from '../../images/home/portfolio/fnb-010.png'
import fnb6 from '../../images/home/portfolio/fnb-011.png'
import fnb7 from '../../images/home/portfolio/fnb-012.png'
import fnb8 from '../../images/home/portfolio/fnb-013.png'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay:true
};


let gallery_list = [fnb1,fnb2,fnb3,fnb4,fnb5,fnb6,fnb7,fnb8
]

const Fnb = () => (
  <Layout idLayout='fnb-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Food and Beverages</div>
          <div className="detail">A cashier application for hotel restaurant</div>
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
                <ProjectIcon fill='#044B7F'></ProjectIcon>
                </div>
                <div className="name-detail-wrap">
                  <div className="name">Food and Beverages POS
                  </div>
                  <div className="type">Restaurant Cashier Application</div>
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
                Implement Single Page application for cashier system for tablet view.
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
            <div className="label-box">Invision</div>
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
              Food and Beverages is a point of sales application for a restaurant. This provides to record all restaurant reservation. 
              <br/><br/> At the point of sale, the merchant calculates the amount owed by the customer, indicates that amount, may prepare an invoice for the customer (which may be a cash register printout), and indicates the options for the customer to make payment. 
              <br/><br/>
              What I do? 
              <ul>
                <li>Create initial application,</li>
                <li>Implement some feature,</li>
                <li>Create invoice in pdf, and </li>
                <li>Create invoice print function.</li>
              </ul>
                 In this application, I generate the invoice into PDF files first, then connect the pdf to printer. The difficult thing that I face is, I have to match the size between pdf and the invoice paper. 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Fnb
