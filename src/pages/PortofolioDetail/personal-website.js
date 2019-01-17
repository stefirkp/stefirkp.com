import React from 'react'

import Layout from '../../components/layout'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true
};
const PersonalWebsite = () => (
  <Layout idLayout='personal-website-layout'>
    <section className="portofolio-detail-wrap" >
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
                  <div className="name">Personal Website</div>
                  <div className="type">Profile Page</div>
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
                 Create simple page to show skill record
              </div>
            </div>

          </div>

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
            <div className="label-box">VSCode</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">HTML</div>
            <div className="label-box">SCSS</div>
            <div className="label-box">React JS</div>
            <div className="label-box">GatsbyJS</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
                As you can see, this is my profile.
                The place to explore react using GatsbyJS. Why GatsbyJS? GatsbyJS is a starter package to build static page using react. 
                <br/>First impression about this they are amazing. Simple and easy are words to describe this package. 
                <br/><br/> 
                Very recommended to create static page. Just create new file and you will get new page. 
                <br/>Try by yourself <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
                <br/><br/> 
                Wanna ask something about me? See below 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default PersonalWebsite
