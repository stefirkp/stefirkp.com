import React, { Component } from "react"
import APartOfLife from '../main/About/APartOfLife'

class About extends Component {
  renderLife(key){
    return(
      <APartOfLife key={key} aLife={life_list[key]}/>
    )
  }
  render() {
    var renderLife 
    if(life_list){
      renderLife=Object.keys(life_list).map(this.renderLife.bind(this))
    }
    return (
      <section className="about-wrap" id='about'>
        <div className="title">Let me summarize my life so far</div>
        <div className="life-list-wrap">
          {renderLife}
        </div>
      </section>
    )
  }
}

export default About

const life_list = [
  {
    id:'caption',
    location:'Caption Hospitality',
    year:'Des 2015 - Now',
    title:'Front End Developer',
    desc:'Create application for hotel industry, such as Point of Sales for front desk and restaurant, Product Profile, and Center Management System. From here i learn about React JS, Ruby on Rails, Angular, and preprocessor CSS as SCSS. Increase my skill day by day by learning how to create clean code, so another member can develop easily.'
  },
  {
    id:'ukdw',
    location:'Duta Wacana Christian University',
    year:'2011 - 2015',
    title:'Bachelor of Informatic',
    desc:'Finish my study with final project "Museum Recommender System using Slope One Algorithm". Became lecture assistant for basic knowledge of database with oracle and Web Development since 2013. Also a part of tutor team to teach discrete mathematics to informatics engineering student of DWCU.'
  },
  {
    id:'pptpm',
    location:'PPTPM DWCU',
    year:'2012 - 2014',
    title:'Multimedia',
    desc:'PPTPM “Pusat Pengembangan Pengajaran dan Multimedia”  is a multimedia center unit in DWCU. I was voluter who documenting any campus event like Graduation. From here i learn how to edit movie, create packaging, and work in team. Beside that I also maintance multimedia devices classroom. Make sure projector and computer working well.'
  }
]