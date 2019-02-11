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


let gallery_list = ['https://lh3.googleusercontent.com/WTrEipwMr6zqe6ozCFo0mgpkKL0hvqy5q0GegHKU_I2v5sGqMbHlgJsk3jcB_FtRSFs2vADF3qhObfL3zBGGTBLpBnBiWLkEt-W4BliW2ZPng1HjX4mzA_exY0NSp7ULmKQK1RZWtw=w1920-h1080', 
  'https://lh3.googleusercontent.com/RyWOXlObJMyHLApJPHj--NSvf3cDu_a5hebrJtKgsQyxgtmLb2BCP3E5i5-wz6njYMx0pW6JVsMx1GsTL_0WaB5RTY69EG7EpTmxReMdpl_HCa2uaJM2Azdxy32dj4Ul5GbYCy9pBQ=w1920-h1080', 
  'https://lh3.googleusercontent.com/wEfjPp_EPA4l-RdkVms_-XHTobfPmbsLKTHVeC58bnt73SXc-DNb6A-sWQlWkLLEotLEdBHgELh3sHIyIjshdwoJZzjepI7qSpsW7Tj4HP4U4biZdkNaDpGka5lmlxnRkKjezm3USQ=w1920-h1080', 
  'https://lh3.googleusercontent.com/bY8wx0fQGVAdknPsvNH0WMSeZ6NioM-FliP4S-SF86bblPk9S7o5je-_spwFoMsJOJLiiHcQkmP_vwNapObFPnIZF4pxTX5Joci1d2ZGlfddz8eNnJETlVB488hO_7nH-KNiINbbNg=w1920-h1080', 
  'https://lh3.googleusercontent.com/fW0AVDl6YtOD6eZwNqON19mSthzP2IqT1o3_jatP-8AoZpqPAjypz_Yv3_MgeopprHHo2JSvcnizchdW1u8ooHHP-XmgWZwCZVWVaMagcDje5CZRAZJhHUPXUp-thvdmLtjSuA-YQQ=w1920-h1080', 
  'https://lh3.googleusercontent.com/_fWRrxRKrmgUyD9Y33zuCosNwmWmsaUXWQzLp_yKnLDtLvymEw4PRN9K81ppq2KSJ8GMvwL_D0ENQlbDBS1idewdlaf1GZKuEF8DH1AfjjEh0XlhNiJ2sNKm19WKS1hpkAHIczuswg=w1920-h1080', 
  'https://lh3.googleusercontent.com/au024pzn5M5cw01v3fyzB-GrmjzmKf1stwKdP-mvrqDHvZ3PswF59g4Zpkx1c-F9slwBF1FcRb8gw3lm8yL6KaLxK4r4a6k8K0zYcllJtOUrE7QSv7VO5UKBP3u3UnRK-Ia9kyg-Lw=w1920-h1080'
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
