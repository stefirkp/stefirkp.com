import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

const Caphost = () => (
  <Layout idLayout='caphost-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Caption Hospitality</div>
          <div className="detail">A Product and Company Profile</div>
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
                <ProjectIcon fill='#963e39f7'></ProjectIcon>
                </div>
                <div className="name-detail-wrap">
                  <div className="name">Caption Hospitality
                    <a href="https://www.captionhospitality.com/" className="link-port" target='_blank' rel="noopener noreferrer"></a>
                  </div>
                  <div className="type">Product Profile</div>
                  <div className="year">middle 2018</div>
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
                 Create responsive page for desktop & mobile 
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
            Caption Hospitality is a profile and product website. The customer can view caption product and request to subscribe caption product. 
            <br/><br/>
            Develop using Ruby on rails and JQuery. The responsive view we using a desktop, mobile, tablet materials from rails.
            <br/>In this website, I also implement SEO requirement, set meta for search engine and some social media.
            
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Caphost
