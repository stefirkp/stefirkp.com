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


let gallery_list = ['https://lh3.googleusercontent.com/5LVABU33mkkQV2PocFYSRNyN-2E7tnLizFREbll6yNTrEylgv9HtvgzcBbPMej2ps1SS5jOVvqCfdgIXJY7v7PkslNxB5hF8Gc8E5YCdTxtGyZHWOQGE47glqMZ7dUHJ0zl-dje5uw=w1920-h1080',
'https://lh3.googleusercontent.com/R_IpRCidwode_lMLFILzJeSst9GiaB6Ryg6O52PqVRmd8f4TlWtNrzaedp8ru9gQnrU2eBSoWQqtKeFYaMwCjI31sww1rEU0IKCH9_cbobfXkenlu1gMELdaKBktSyU1krR1IrJf8Q=w1920-h1080',
'https://lh3.googleusercontent.com/yn8ASgKhQs2Q_3I9kkyj8LPAOCUDNjx_cS6IaUQBF3fRubxxTk--hDFf91DTrQHOOf9bIYOo2YVNW9vN-9vLE17Hfmia3P5AQXFt1lgg3uaTT1ddFghL7X_NbtBn71YAr6jZvdBHbw=w1920-h1080',
'https://lh3.googleusercontent.com/hvBAiHeBkzmuIf5b6Uo8oh3qOFI1bfDfDpQtouieto0g51y_Cl7R4slqjKEAWdXqfwoF0lO39CEmsacrKWNhGXZftMSAij9PVwzBbCzPHW6WuAUJcKo5y3O660Skft5W3HGvraNyZA=w1920-h1080',
'https://lh3.googleusercontent.com/N_n38Jw7e9Dg3zBo4ykRUkawDBfDvlBXOOlsunrIOXukykXB9lYzrwabY5kwGG7zH6BEzHjpgAu7MyOUZ6BsaIbRmFkwPicbhc0bK1uSNoS2IauKzTFhxT7KVb-aS3Nfrvy9KstXvg=w1920-h1080'
]

const Crs = () => (
  <Layout idLayout='crs-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="bg-wrap">
        <div className="bg-top"></div>
        <div className="col-title">
          <div className="big">Central Management Reservation</div>
          <div className="detail">A place to control all hotel application</div>
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
                <ProjectIcon fill='#107E7D'></ProjectIcon>
                </div>
                <div className="name-detail-wrap">
                  <div className="name">Central Management Reservation
                  </div>
                  <div className="type">Management Application System</div>
                  <div className="year">last 2015</div>
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
                Implement feature for management hotel, fix and complete some module
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
            <div className="label-box">Ruby on Rails</div>
            <div className="label-box">Angular 1</div>
            <div className="label-box">JQuery</div>
            <div className="label-box">HTML</div>
            <div className="label-box">SCSS</div>
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
              Central Reservation System is a computerized reservation software used to maintain the hotel information, room inventory and rates, to manage the reservation and process. A CRS provides hotel room rates and availability for many different distribution channels such as the OTA. The CRS can be connected with other applications such as the hotel point-of-sale (POS), Booking engine, and Hotel Template.
              <br/><br/>
              In this application, I implement a market segment list page, website setup module, and complete another page. 
              <br/><br/>
              Built with Ruby on rails and Angular 1.0. This application provides for desktop view. 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Crs
