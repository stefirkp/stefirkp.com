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

let gallery_list = [

'https://lh3.googleusercontent.com/Wfetkm8YPIal13J1CJZC_4zhOJDZdBE66rGDexRk4qzhzRzmYT473SeRbmy6TQ0uovJC0K523V7oXWbr8TJu2qJSKkKXPgJyYalu5VtgBYIarBq00mPCn-xAQlXbH8DLS8NdpJ9_VA=w2400',
,'https://lh3.googleusercontent.com/s5tXeb8Q_QnhsbMRmk70w3NRyrAQc9dwnzlx6b5bOxWFrgXs3WwBxcBliYxgXhAIDotx_jyyDmTCbcvHl5gqMgAW7BchMDOC9qB_A6YbyL4rhOuerr7LcqH6E_L7lOTPY5kN24jqHA=w2400',
,'https://lh3.googleusercontent.com/9kbGTVrVMWzrURywGRLNr3XHVzB05WRiQaVXCEcj_mDtptTWUCJjW5l85r20WuTm5pUKd52b8b11eRwtdnj7b8kUiFJ4Pv1gTJCo9tP59M1LqxutHLhZPpmra5HcYvTfCOgLaqmNaw=w2400',
,'https://lh3.googleusercontent.com/MTFBM2NiTb5Vb7JP0XvZG1-lW36yNNDn_r3glbeZnnkzwPvjp-EWFJF1eWQUUY8EqcPr6NpG--tW8ay1jZH6CFRFs8gegbsorWQYYinP3MqmrpcqQWicwJ-8PDWR62iveUMFr7Sybg=w2400',
,'https://lh3.googleusercontent.com/bgRVMsahSXTUi-7a-yUrGFsMJY-v8Z6R3YJltKzFbuAiSfTxoZb5a5I04bQBSJX2NsAHyl-rFSlMlMnIf7m9OdMM1aFsH29X0SobtIfqG5hhkA_JinonswR3jcJuwf8hBER2ttmkgw=w2400',
,'https://lh3.googleusercontent.com/-WWRbEKCMz6n4F6L9nUE-C3xhcnG_xmHHuGBtF4KrdrfzRfu8rYZADp-X1uaeWQUifASqQGIOSkJgMAtVQuvaBCfsTvCYw-jAQKGwqW8vnxOErnk4qowNO8G7gASiMsmzHzD_JvEPA=w2400',
,'https://lh3.googleusercontent.com/Kpvvpskb0YF1UdQHL7j1l3X5Jd5QMNtL4Qb-zqk7FEur4Ur3q11G6eTMEmqy5I_EMD2hzW6XG6175CCpqQshaz2wOL86tWUdeeZjVsWOh7Bg5fE2RPrhTUaUv1Rvjrpphoi3fdw-hw=w2400',
,'https://lh3.googleusercontent.com/kbQ-KfO4ZwAfj3hQl0y64UsmlEVP34nUwFUruJN74rg0KNvjo2AF1mbmz8pF5tP7_mRDT5EnQe95bxOsJ-3XO2LA8uY2eXb3Ykqd_W_LszcQ3wMoekQdcdIN8ND8iX3IEFm3yZA5lQ=w2400',
,'https://lh3.googleusercontent.com/gTtX6Cjg-D0gtDcyixmly7WZd0SRn-N9CrHAGy_6ak6sqzra-fgI0gPLNDyn9UMvKAb7K6k2zS9QPnrm2BL4YXkAeYNLgwSe3qGLPe9lQ1XWmOMmgetiyb0H-PpLtifqCMeFS_hLlg=w2400',
,'https://lh3.googleusercontent.com/pe0_mtnYusrc3TIvUiwxmZ9YtDAZNTAOiWTfeVgu-Vs_WIyOOzI4j0fpFQSoClbjf3L9ZyoSlewVXG-ty9MOKKJwYq25AF4eqryJDyh1JxCk7iiakE1PKRB6Lkq_Ikk1yZD9Kl6BxA=w2400',
,'https://lh3.googleusercontent.com/afwbMECuHQkJHd5FFkVxuDullwG8ZO8CNGieOSqmHtwi4LwvDdhRuyOoHoMBVfjrlyrjmxm6SZPgVZP9Zl0exx0nsn7R1kN2NHlnuadexpKdTl9wXWmMw5M1ngUnVdEewqscP0waSg=w2400',
,'https://lh3.googleusercontent.com/gQsdP4Dy03VV4d9ZuqDcs5CbGKtrkbqyHWI9YlpCP6chFYjRTSr6L3ev5Cs5cnsfXdvOGZXzNaxl-PjJV9BnUdAT5k-m-V_IfntR5UwmIRb7wxkaGaTONjCnugclKEwnd8F3q4Jm1Q=w2400'
]

const ArchiveLetter = () => (
  <Layout idLayout='archive-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="top-wrap">
          <div className="bg-top"></div>
          <div className="col-title">
            <div className="big">Informatics Faculty Letter Archive</div>
            <div className="detail">An application to record incoming letter</div>
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
                  <div className="name">Letter Archive</div>
                  <div className="type">Internship</div>
                  <div className="year">Des 2014</div>
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
                 Create application to record incoming letter and deliver to lecturer
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="gallery-wrap">
        <div className="gallery-frame">
        <Slider {...settings}>
          {gallery_list.map((img, key)=>{
            return(
              <div className="slide-img" key={key}> <img src={img} alt={"img"+key}/></div>
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
            <div className="label-box">AJAX</div>
            <div className="label-box">JQuery</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
                Develop in a team, 4 member. 
                This application implement for Informatics Faculty of Kristen Duta Wacana University. 

                <br/>
                <br/>
                
                The main function are to record incomming and outcomming letter in Informatics Faculty. Change the traditional way to digital.
                Every letter can deliver to lecturer as soon as posible by this application by receiving email.
                <br/><br/>
                Beside that student can request letter recomendation from lecturer by this application. 
                If the letter already done, the student get email to take the letter.
                <br/>
                This help the front office to record all letter come and out. 
            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default ArchiveLetter
