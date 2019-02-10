import React from 'react'

import Layout from '../../components/layout'
import ProjectIcon from '../../components/layout/projectIcon'

const BookingEngine = () => (
  <Layout idLayout='be-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Booking Engine</div>
          <div className="detail">Simple way to book room hotel</div>
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
                <ProjectIcon fill='#6999ab'></ProjectIcon></div>
                <div className="name-detail-wrap">
                  <div className="name">Booking Engine
                    <a href="http://adilla-syariah.captionhotel.com/booking/" className="link-port" target='_blank'></a>
                  </div>
                  <div className="type">Application System</div>
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
                Implement promo feature and complete another part
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
            Booking engine is provided to customer book a room. This system can install in every platform. If hotelier using a hotel template, they can connect with this system.  
            <br/><br/>
            In this application, I implement a promo feature page and show the promo info inside the available list. And also implement detail payment page. 
            <br/><br/>
            Makes use of Ruby on rails and JQuery. The responsive view we using a desktop, mobile, tablet materials from rails.
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default BookingEngine
