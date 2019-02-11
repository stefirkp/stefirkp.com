import React from 'react'

import Layout from '../../components/layout'

import ProjectIcon from '../../components/layout/projectIcon'

const HotelTemplate = () => (
  <Layout idLayout='ht-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Hotel Template</div>
          <div className="detail">A Template for Hotel Profile</div>
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
                <ProjectIcon fill='#6b3555'></ProjectIcon></div>
                <div className="name-detail-wrap">
                  <div className="name">Hotel Template
                    <a href="https://pawoncokelat.com/" className="link-port" target='_blank' rel="noopener noreferrer"></a>
                  </div>
                  <div className="type">Hotel Profile</div>
                  <div className="year">May 2018</div>
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
                 Create template site with responsive view for desktop & mobile 
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="template-gallery">
          <div className="desktop">
            <div className="view"></div>
          </div>
          <div className="mobile">
            <div className="view"></div>
          </div>
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
            <div className="label-box">Ruby on rails</div>
            <div className="label-box">JQuery</div>
            <div className="label-box">HTML</div>
            <div className="label-box">CSS</div>
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
            Hotel template is a place to introduce the hotel profile. The hotel can install booking engine to help guest book reservation directly from the website. All the content in this site, control from CRS. 
            <br/><br/>
            We provide hotel sites with 3 template choises with different style.
            <br/><br/>
            What I do? I development this page with the team . Built using Ruby on rails and JQuery. The responsive view we using a desktop, mobile, tablet materials from rails. 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default HotelTemplate
