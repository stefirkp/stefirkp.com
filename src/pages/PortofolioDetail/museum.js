import React from 'react'

import Slider from "react-slick"

import Layout from '../../components/layout'
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true
};

let gallery_list = ['https://lh3.googleusercontent.com/JiNL4PyuoQx6FUAXxkWT4B_82-VseeC5tfbskjK3G-3gRjtN_icucSO5OB4xJCd-yG18W93-Utx3Zb2NEFxMN6CYD9m4c_DMTYF3yBqGRekgSXyfYeml3Z3aTa1xlTMUO2kv-cU66g=w2400'
,'https://lh3.googleusercontent.com/2bKsYI_IeEwL78uVi5pI37wZ1HDemyAK8Ze6gys7ssKIxt892AHm-BPDJ22B6j0XrheehjkVMC_A752XYL7DtZ0kHP9XmGtgi8ulI7fdPCQyDu9x-6UbEGZGCV9neS8AETa27Z5K3A=w2400'
,'https://lh3.googleusercontent.com/QMpECt340hNrMCKgvKELygkmkfJAxk0KdyABBPz535NrLYGPsiCOMHpME2EUHA5ECghTaA2ROxeM0qszYU0tcW6J6bO6zoIcIWmDeARgmHcTBn1TJsGjP8VGPfi5rcnB9Op5Ut0eKQ=w2400'
,'https://lh3.googleusercontent.com/kpQkIoKjqPvQT55dFpRz1zucO9Wx9Dtv1Vh3O528zeu7Aue0sb4TcrTHb0CSLCeltUuyP8UzD1N8rfQqJn6vKqsC0cuCBUr0IidqSh4Hf6RN0zwWtrUluu8sG13D5ClEH7k4YNV6-Q=w2400'
,'https://lh3.googleusercontent.com/EGuQe4G_8gqrRRcL8r2BuEUiXeIFcQZDJTHeNc0CBE8d4AhKku7fQmzmi6wl9KbUNvqwcSErq2njJ4Di3ghpiKtGr8a3Y7GT6507pbfdeXmeI95Mf1v-lyeFuxqtNJwvTJqmBAs9hg=w2400'
,'https://lh3.googleusercontent.com/37Wsp3fJm9oUbVW43WTet5671yyl4Xn2cwC1PYj0ug5GAqFtpaoNSsfai3l2yvcFyMoq3oiYQbJTCIwFinOpEpc6zPQI82szMDfZF4yFDNR0i572omoCbOa3zK4kArWByZP0jCerFg=w2400'
,'https://lh3.googleusercontent.com/B1xZ2-bC6tslNBzr1AZkuS4KL-aLnTSdy_Zyo1tzyGgvIhe64npaJM7SDHP6IIgNZCsfIZyuGNTPRjmy6gRcdE8MvmiLuY1u2IyIPD5FwbbJCDbf28MqrNj9kg4I7QIKkd1LWXfLpA=w2400'
,'https://lh3.googleusercontent.com/PGIBQOSyIkbcOWQGsGmnVkKQYSpR4089BHl3IvJZCJ1XHTkjSuVxJ6BysWSz_YqU3iA83J8dS5wQOW-sHs1lyjFcDG_7D0QT6xOLtV_bjxDUlo8_5nnmsa3Iz-SckIhlkipWU2ceGA=w2400'
,'https://lh3.googleusercontent.com/iM9vkPbt1-NFTpqACugpBHgfkIAyVHYOJnqFeUijx95k_qcRsHsIU0t3h9SdncukxF-LfYYX79BlqBDlbxqqrVZjPtMdozOcn4SuFigenoBJEZv0vCyqA_xLMRAiqV_dtHX_ceJWFg=w2400'
]

const Museum = () => (
  <Layout idLayout='museum-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="top-wrap">
          <div className="bg-top"></div>
          <div className="col-title">
            <div className="big">Museum Recomender</div>
            <div className="detail">An application for museum explorer</div>
          </div>
          <div className="col-bg-pict-help"></div>
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
                <svg viewBox='0 0 100 100'>
                  <path d='M5.99306484,0 L94.0069352,0 C97.3168135,0 100,2.67804027 100,6.00333095 L100,16 L0,16 L0,6.00333095 C0,2.68778282 2.68768095,0 5.99306484,0 Z'
                  fill='#efcb00' />
                  <circle fill='#FC645F' cx='10' cy='8' r='3' />
                  <circle fill='#FDBD41' cx='21' cy='8' r='3' />
                  <circle fill='#35CC4B' cx='32' cy='8' r='3' />
                  <path d='M100,16 L100,93.9926375 C100,97.3104122 97.312319,100 94.0069352,100 L5.99306484,100 C2.68318653,100 0,97.3120937 0,93.9926375 L0,16 L100,16 Z'
                  fill='#FFF' />
                  <rect fill='#F3F3F3' y='16' width='100' height='12' />
                  <rect fill='#343434' x='10' y='19.5' width='17' height='2' rx='1' />
                  <circle fill='#343434' cx='89' cy='20.5' r='1' />
                  <rect fill='#efcb00' x='10' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#efcb00' x='18' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#efcb00' x='10' y='32' width='40' height='8' rx='4' />
                  <rect fill='#D7D7D7' x='10' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='47' width='24' height='2' rx='1' />
                  <rect fill='#efcb00' x='10' y='43' width='24' height='2' rx='1' />
                  <rect fill='#efcb00' x='38' y='43' width='24' height='2' rx='1' />
                  <rect fill='#efcb00' x='66' y='43' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='51' width='24' height='2' rx='1' />
                  <rect fill='#efcb00' x='10' y='57' width='28' height='6' rx='3' />
                  <rect fill='#D7D7D7' x='10' y='66' width='74' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='70' width='79' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='74' width='71' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='78' width='74' height='2' rx='1' />
                  <rect fill='#efcb00' x='10' y='84' width='28' height='6' rx='3' />
              </svg>

                </div>
                <div className="name-detail-wrap">
                  <div className="name">Museum recomender</div>
                  <div className="type">Final Project Application</div>
                  <div className="year">Oct 2015</div>
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
                 Create museum recommender system with slope one algorithm
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="gallery-frame">
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
            <div className="label-box">XAMPP</div>
            <div className="label-box">MySQL</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">HTML</div>
            <div className="label-box">CSS</div>
            <div className="label-box">CakePHP</div>
            <div className="label-box">Bootstrap</div>
            <div className="label-box">JQuery</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
              <div className="concept-wrap">
                Recommender System is an application that can filter information and provide recommendation to user. 
                This system use 2 method, Slope one (a part of Collaborative filtering) and Demographic. 
                
                <div className="col-1">
                  <div className="col-2">
                    Collaborative filtering is one of recommender system method, which can provide 
                    recommendation based on similar taste with other user seen on the rating of an item.
                  </div>
                  <div className="col-2">
                    Demographic method can help to overcome coldstart problem in slope one. Coldstart is user who never visit museum. 
                    The system will calculate similarity user based on  user information (age, occupation, education).
                  </div>
                </div>
                
              </div>

              <div className="keyword">
              Keyword : <b>Slope one Recommendation, Demography Recommendation, Collaborative Filtering</b>
              </div>

              You can access <a href="http://sinta.ukdw.ac.id/sinta/resources/sintasrv/nim/71110064" target='_blank' rel="noopener noreferrer"> full version </a>
              

            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Museum
