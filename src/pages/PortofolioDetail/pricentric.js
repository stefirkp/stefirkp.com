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
'https://lh3.googleusercontent.com/NLnQLNXS_7nFocnum05wAohVQT1TjI4b7gPBdo8tJuyCdipJpJ6XY4rZLGfftgIKd96zNJCX7AHPHhvjqbPUtMV8zZ6aFKXP8QV-jOTwJeBYA7FCqyfv1N-AC3JbFbjoDn8M8Wn1Lg=w2400',
,'https://lh3.googleusercontent.com/G9-0_bDUm6cNrAhOywYAtC_wbf7Pcmtrw2U8CklzwPHRY42M1Pidk_HmUxjGflNyJ27bDahoXAphBshLGQKc7LOlMLnxwCyKkMf6_Ulq0xYiSP6lH167cqhxxlpTu-4QroAtfZUNeQ=w2400',
,'https://lh3.googleusercontent.com/g5kww173myoive2ywMgtUtlkfvTE0gjxcHA2QIOpoT4BTzAy-bJe7V0yYouO5xly7K50_dvBjxB7VdH4qHkBSlVKxQFpkcWExDeR8-qQB0WPhzRtYmORIy5DFgFXP7TiihoOTksc1A=w2400',
,'https://lh3.googleusercontent.com/_ynuU7tkzqd6DW3j55d26PcZFcuJz6lW_-qX0DYQmjL_U0fk7dVwGXq1St5JTiwEBFlbo9m80dVR6hn05dE1chGNtLyG5Tlv5mQGFVpXCHVaK61-bQEkqCNIY-OPFOIiBbEINrZhhQ=w2400',
,'https://lh3.googleusercontent.com/6t1aAcenzLmGastw_MpO-WsroVu4oVm5RanBfmcIvoUW54zd4Xcqh1FwtdcPKclHZS2gFy7i6x19q_giBn0IgKaaE-LeIy9OYm8dHlrHYr7BwQDSOLUN_qGQg9wroVKO0rXpHGbcEQ=w2400',
,'https://lh3.googleusercontent.com/HXAmNe-xcnPNUyRE-8zYZ0X5Xfg07Rl9ONAyxcMfYjJfQqbXBuBIihTMVbp3gO1sk29RqU7FG9DGsCCbW39_iIXTIJ8e8toPp65eztP574wOzMnh-QXeOwub9aOtwSHccbXCaGvpyw=w2400',
,'https://lh3.googleusercontent.com/RxJbtpIkHwdwUtHLtC7o-aDOqQVf5t5B1I4w4fqvZ6LPDDnC4lT3jTMjzDt_ztrXGHByqygEFkE6qU02ReeYDEQqIeT4t_Izy6kPTDc2-HtRnkQ8wLlAJXnWEDpOea4USaLW80VoCg=w2400',
,'https://lh3.googleusercontent.com/3GQrVaGONqQtS8FJL2np5KkFtEHaV0gAUNrtkfNNkpJz3hd7mFPWzZj60WwPkOa42hxCwDsrkpxehZn73E_zvBfF_WHNLWxAyl_0GHKYn7OidIl5YFd9wiNf6qzNrNAfvhu8U44atA=w2400',
,'https://lh3.googleusercontent.com/DuOofum4pyjdOMkNPDbFBxvUKTR8Bgv6KLbQbzypYcCCLRLa0WcCLn2yXRAPMcNR8S_uIrxaVUEVLa0sWoiuftwSCzM0HrxKGhHBUAWQPVbeHBi5NvmKv5UB63DFjKY1y8vT18oe3g=w2400',
,'https://lh3.googleusercontent.com/U_9xwmRam3T9QyZWvUFIoEjvoX6LERnYm4YFZCXrw7B3ovKm5kf_EXACG9OYoGjfsv2pU_08XJiTbdO-hlMlSqHlRGIk2VTkumyF0OmsGZKoqequlBJx28do1c0MbjwPiXfY0-NYQQ=w2400',
,'https://lh3.googleusercontent.com/MqNhei-pE6FriwBJOKgVpqi2PlBigWvdBgTSbopzR_5NNwrdsZasba6Mq78GLsRReCTjzKxMf_qkZW4iwOczlaeHCe7DduyifAjTA3NJLeophDjxqI7g3JMuNZJhsaSoyUoH-8aEeA=w2400',
,'https://lh3.googleusercontent.com/MHmGPZ-RgsOjav-lhG4PKiX_9C1hhI3kY4Kgxv8wUv89la2bMxP8h3l9ZjvbWwZhxsw-3JKeXmYwoj0wEk7hf0IF3wf8Tv9Hk3FHaC2rmo4uKZQj0X5stTnxe2_Y5sDBxlJkGW55gQ=w2400'
]
const Pricentric = () => (
  <Layout idLayout='pricentric-layout'>
    <section className="portofolio-detail-wrap" >
      <div className="top-detail">
        <div className="top-wrap">
          <div className="bg-top"></div>
          <div className="col-title">
            <div className="big"></div>
            <div className="detail">A report application for pharmaceutical</div>
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
                <svg viewBox='0 0 100 100'>
                  <path d='M5.99306484,0 L94.0069352,0 C97.3168135,0 100,2.67804027 100,6.00333095 L100,16 L0,16 L0,6.00333095 C0,2.68778282 2.68768095,0 5.99306484,0 Z'
                  fill='#0f48b1' />
                  <circle fill='#FC645F' cx='10' cy='8' r='3' />
                  <circle fill='#FDBD41' cx='21' cy='8' r='3' />
                  <circle fill='#35CC4B' cx='32' cy='8' r='3' />
                  <path d='M100,16 L100,93.9926375 C100,97.3104122 97.312319,100 94.0069352,100 L5.99306484,100 C2.68318653,100 0,97.3120937 0,93.9926375 L0,16 L100,16 Z'
                  fill='#FFF' />
                  <rect fill='#F3F3F3' y='16' width='100' height='12' />
                  <rect fill='#343434' x='10' y='19.5' width='17' height='2' rx='1' />
                  <circle fill='#343434' cx='89' cy='20.5' r='1' />
                  <rect fill='#0f48b1' x='10' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#0f48b1' x='18' y='23.5' width='7' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='32' width='40' height='8' rx='4' />
                  <rect fill='#D7D7D7' x='10' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='47' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='47' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='43' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='38' y='43' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='66' y='43' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='38' y='51' width='24' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='66' y='51' width='24' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='57' width='28' height='6' rx='3' />
                  <rect fill='#D7D7D7' x='10' y='66' width='74' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='70' width='79' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='74' width='71' height='2' rx='1' />
                  <rect fill='#D7D7D7' x='10' y='78' width='74' height='2' rx='1' />
                  <rect fill='#0f48b1' x='10' y='84' width='28' height='6' rx='3' />
              </svg>

                </div>
                <div className="name-detail-wrap">
                  <div className="name">Pricentric
                    <a href="https://stefiportfolio.github.io/pricentric/pages/anatomy_management.html" className="link-port" target='_blank'></a>
                  </div>
                  <div className="type">Report Application</div>
                  <div className="year">June 2017</div>
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
                 Create business reporting for desktop view
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
            <div className="label-box">Zeplin</div>
            <div className="label-box">Sublime</div>
          </div>
        </div>
            
        
        <div className="row-label">
          <div className="label-row">Development</div>
          <div className="row label-box-wrap">
            <div className="label-box">HTML</div>
            <div className="label-box">CSS/SCSS</div>
            <div className="label-box">SVG</div>
            <div className="label-box">Bootstrap</div>
            <div className="label-box">Bootstrap Select</div>
            <div className="label-box">Bootstrap Tag Input</div>
            <div className="label-box">JQuery</div>
            <div className="label-box">Git</div>
          </div>
        </div>

        <div className="row-label">
          <div className="label-row">Process</div>
          <div className="row">
            <div className="process-wrap">
              This project develop by team, 3 Front end, 1 UI/UX, & 1 Project manager. 
              The application have 2 level access user, admin & non admin.
              <br/>
              <br/>
              <div>
                We use Bootstrap Tag Input for search bar. When user typing then enter, it will be create a tag, so user can search word by word. 
                Here the example : 
                <div className='example-boot-tag'></div>
              </div>
              <br/>
              <div>
                Another requirement, the height table should be responsive with the height resolution. We use jquery to detect height screen. 

                <div className='example-height'></div>

              </div>
              
              <br/>We develop this project by 3 week (43 pages for admin access & 4 pages for user access).

            </div>
          </div>
        </div>
            
      </div>
    </section>
  </Layout>
)

export default Pricentric
