import React from 'react'

import Layout from '../../components/layout'
const PortofolioDetail = () => (
  <Layout>
    <section className="portofolio-detail-wrap" id='jupiter'>
      <div className="top-detail">
        Porto name
      </div>
      <div className="main-detail-wrap">
        <div className="detail-card">
          <div className="col-2" id='project-name-detail'>
            <div className="row-label">
              <div className="label-row">Project</div>
              <div className="row">
                <div className="pict-project"></div>
                <div className="name-detail-wrap">
                  <div className="name">Nama Project</div>
                  <div className="type">Apps Profile</div>
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
                 To create responsive page for profile 
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="gallery-wrap"></div>

      <div className="main-detail-wrap">
        <div className="row-label">
          <div className="label-row">Style</div>
          <div className="row">
            <div className="col-1">
              PROJECT JARGON
            </div>
            <div className="col-style">
              <div className="col-1">
                <div className="row">Font type</div>
                <div className="row">Font type</div>
              </div>
              <div className="col-style">
                <div className="color-use">
                  <span className='color-circle'></span>
                  <span className='color-circle'></span>
                  <span className='color-circle'></span>
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
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
              Develop this project by team, 2 Front end, 1 UI/UX, & 1 Project manager. 
              UI/UX just give limited view for responsive page. 
              Thats the chalenge for us, to think responsive based on design already made. 

              From here we learn how to create clean structure in a website. Thats important to handover development to another team. 
              We use concept .... ? 

              put snippet 

            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default PortofolioDetail
