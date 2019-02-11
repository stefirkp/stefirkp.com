import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

import Slider from "react-slick"
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay:true
};


let gallery_list = ['https://lh3.googleusercontent.com/6GXQhsdT-Y-fIJu27Kd9JiqAsWUHenJdvut9cDIP87iqyIvIxVc2TuM_OTEQ66qJRqw2I774gaHjjeU35wAkUi2ze9JaNpXajmlyc5Jz0tTtXlHRKmzdIBpwSnIyClLfwhASc97xTQ=w1920-h1080',
'https://lh3.googleusercontent.com/RyUjnBjqsy0or_GOwAYpF9SWc-wxpF5U6-PDB35WGIlcrOze-F-1A9MOaCkbLa9MKTxrho0sT-uHTnxpVFJ4pHnr-HgVUzJMcD_MLvnU4rn7CfhasZjPOmwAUzqtbtomRMqvUOvLMQ=w1920-h1080',
'https://lh3.googleusercontent.com/n-PGBWD0YR-DNEagcB9QXD6vd23rIC8T7Ie_v2ym9Y-cS2jk3ByHP2lbVl6ScKQ6QGne4IdF8WPJhlNaUzZYl7a-Fv10DfZrwFp4YP7HpMH47LJTy9NeyjZjUPhxTUKv-G9bzZxXfw=w1920-h1080',
'https://lh3.googleusercontent.com/Qjw69OMBCnqp1q7gjIb8nb0o8VnDydhTxRq5yZ2IohOr27s2DBnzWFoj9_BSKzArs4DxNyrXxy2CFZNj9NckrWTHM6aeXGEvxxuQDh5yD_s396Bbq4iILMWx7xT56YftQwglyf7DOQ=w1920-h1080',
'https://lh3.googleusercontent.com/IHijDgSghjXoJ3GscbMC8hd_ORs0ORh6rC5ut1E1Syu0P28zTgs6N7ohwd6UuZX7jHg-uuejV2hR05cBxpDY7qr5sDmKXWhbIR8u4kzdIJAnV4TqRSrJ0lg71p4NqymnWTpRjuLOjg=w1920-h1080',
'https://lh3.googleusercontent.com/Joz4QSJvMK3RKPoVe8VnyCaJvMIN5dLvHpU9j-3qRMKHzPPPqzrW3OPTJdqMd6MgB1se63cabtPUNQ3SJHtIQevQM-tq-my_G8f8DsDSexiTkjzYp-3T_b5_O6YEZv-s2g-t61_03Q=w1920-h1080',
'https://lh3.googleusercontent.com/mEW5WQw7UhO3UtN1_uqmFIuJjKiGJPBpCgwYhHHG9Vut7hwJ71x7mbNlhlf9etguNJIEtvg9E1Lg4NR_XUdZPipuscurgssbugRBqZe35mR1zYU3_HzdZRgqdVBq3D6phIKgr8zDcA=w1920-h1080'
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
