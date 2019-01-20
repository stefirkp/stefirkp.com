import React from 'react'
import { navigate } from "gatsby"

const Portofolio = () => (
  <section className="portofolio-wrap" id='portfolio'>
    <div className="description">
      <div className='title'>Let's build something amazing</div>
      <div className="content">I have hardwired desire to be better, an instinct for best user experience.</div>
      <div className="content">With every line code, I strive to make the web a beautifull place</div>
    </div>
    
    <div className="porto-list">
      <div className="col-2">
        <div className="a-porto w65percnt h600" id='jupiter' onClick={ () => navigate('/PortofolioDetail/jupiter')} role="link">
          <div className="bg-card"></div>
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title">Jupiter Chain</div>
            <div className="summary-project">A website profile for marketing industry.</div>
          </div>
          <div className="label-project button-project">WEB DEVELOPMENT | FRONT END</div>
        </div>
        <div className="a-porto w35percnt h600" id='falcon' onClick={ () => navigate('/PortofolioDetail/falcon')} >
          <div className="bg-card"></div>
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title"></div>
            <div className="summary-project">Modern way to deploy database changes.</div>
          </div>
          <div className="label-project button-project">WEB DEVELOPMENT | FRONT END</div>
        
        </div>
      </div>
      <div className="col-3">
        <div className="a-porto w2column h600" id='pricentric' onClick={ () => navigate('/PortofolioDetail/pricentric')}>
          <div className="bg-card"></div>
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title"></div>
            <div className="summary-project">Powerful Pharmaceutical Pricing Database </div>
          </div>
          <div className="label-project button-project">WEB DEVELOPMENT | FRONT END</div>
        </div>
        <div className="a-porto w2column h600" id='borderless'  onClick={ () => navigate('/PortofolioDetail/borderless')}>
          <div className="bg-card"></div>
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title"></div>
            <div className="summary-project">Simple. Secure. Payments.  Pay anywhere the same way.</div>
          </div>
          <div className="label-project button-project">WEB DEVELOPMENT | FRONT END</div>
        
        </div>
      </div>

      <div className="col-2">
        <div className="a-porto  w65percnt h600" id='museum-recomender'  onClick={ () => navigate('/PortofolioDetail/museum')}>
        <div className="bg-card"></div>
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title">Museum Recommender</div>
            <div className="summary-project">Explore the museum from good recommender</div>
          </div>
          <div className="label-project button-project">FINAL PROJECT </div>
        
        </div>
        <div className="a-porto w35percnt h600" id='arsip-fak'  onClick={ () => navigate('/PortofolioDetail/archive-letter')}>
          <div className="bg-card"></div>
          
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title">Archive Letter Informatic Faculty</div>
            <div className="summary-project">From tradisional to modern way</div>
          </div>
          <div className="label-project button-project">INTERSHIP</div>
        
        </div>
        
      </div>
    

      <div className="col-1">
        <div className="a-porto w100percnt h400" id='personal-website'  onClick={ () => navigate('/PortofolioDetail/personal-website')}>
          <div className="bg-card-custom">
            <div className="bg-card-side"></div>
            <div className="bg-card-pct"></div>
            <div className="bg-card-pct-2"></div>

          </div>
          
          <div className="button-next button-project">
            <svg xmlns='http://www.w3.org/2000/svg' version='1' id='Layer_1' viewBox='0 0 512 512'>
              <path className='st0' d='M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z'
              />
            </svg>
          </div>
          <div className="project-title">
            <div className="big-title">Personal Website</div>
            <div className="summary-project">Watch me, then know me better</div>
          </div>
          <div className="label-project button-project">WEB DEVELOPMENT</div>
        
        </div>
      </div>
    </div>
  </section>
)

export default Portofolio
