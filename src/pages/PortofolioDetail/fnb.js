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


let gallery_list = ['https://lh3.googleusercontent.com/_gI9bqq3zhC_j2Wfk9z11bMCuttBfOmmWaprIk5UIjctpMeSjRzJivEpEYs9TebWgIMsVNsgF6_TnlmkMZDSn7j7AasYEZthRFwqgqoCgcIe16DZUcMDxYg1WW-kkiHF5q9Yr0Mkgw=w1920-h1080',
  'https://lh3.googleusercontent.com/jaa--iVc8h-Mw9l9_FZ5IYs9mNgih59Fn7znR5CkjZRqjx473MQWIrSTxq-ijeKfzxHT9AQO_mn1sJKs4-3Gdau36j0JpEU1sjXw-ZcQHscpKofDQweY5JfNwie4UX3q3bGH7-kVmA=w1920-h1080',
  'https://lh3.googleusercontent.com/TeeJ-wRiyJGLy_SIRIQJZl4BupAq1Rs0YYzhmbCxh6qipwnjwDLaFw0Hv3vaPGSeC9I4QuAi1P_N5KKCWjecvZy7kmUvJxqX1raA2K87550crU16seQAZVp9ntiIrAdGp8FMa6joKA=w1920-h1080',
  'https://lh3.googleusercontent.com/4FC8WwKSzpprf_PcOHGi6jHp33HVYdp9sLrDozaXlPMi8MeCxc-Jbq2khRGjCNR0qwimCJz4bZgJtbs8VtcsXtzVwXexOYuT_s1zMyv52TY0uXzOqLlVQA9L-6JDXCfPaKXTr00ABg=w1920-h1080',
  'https://lh3.googleusercontent.com/T3NinNBLwccNt8fEGep6A8W--VxZeZ_3wpm3x97ELXYbQ63oP61YeCp35fPosLBNFfp9VhuiaXulZfOJNLK-UIk8OOvf9PCuINtiL0MxdIUVYdDkDDVeEj_1YPjyWL4dBaX9gYO0Pg=w1920-h1080',
  'https://lh3.googleusercontent.com/IeOEN3DnZ8laF2QFfuMvdGBg5Ry4SkFN4vHwmoHHz5fqWsOD2LFuLOcdNmiovmbDCWZIyrfjmNcq8HV2SCT81izSTxMFBHAo8w0DBsiBP4VuzNh37XaA7Z7PK5pDYnAQblsQnIqf8g=w1920-h1080',
  'https://lh3.googleusercontent.com/1RcLlpjd7bbVb2nu3fu5WkUSimvxZwQSJMnYxqV7QAB4WOF-bM0lopEmjpT-MXCFpmeQekFk-GNwPPBh6tyVBtVIn4bCNObrBnHXQ23oDMpmUAa30YITx8f4__s6occxu_D1OKx4ng=w1920-h1080',
  'https://lh3.googleusercontent.com/S5U3osAIp6aBqj-zD4lQCOqIILqsSLJSZ0JyDqE36msoXkxrABZMPCjDIqFi5kmFoyRbOWTU6ylh252npdWVOabkq6uhxqh0UZ-8oyr3VQxgoKlHWrSmZz_-sBZIwD0LI-BkjPFZ7g=w1920-h1080'
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
                  <div className="year">July 2017</div>
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
