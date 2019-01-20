import React from 'react'
import ASkill from './Skill/ASkill'

const Skill = () => (
  <section className="skill-wrap" id='skill'>

    <div className="skill-wrap-2">
      <div className="main-skill">
        <div className="title">Here's a few things I'm experienced with:</div>
        <div className="list-skill" >
          {skill_list.map((askill, key)=>{
            return(
              <ASkill key={key} askill={askill}/>
            )
          })}
        </div>
      </div>
      

      <div className="support-skill">

        <div className="title">Also know about</div>
        <div className="list-skill-additional" >
          <div className="add-skill" id='git'></div>
          <div className="add-skill" id='mern'></div>
          <div className="add-skill" id='gatsby'></div>
          <div className="add-skill" id='cake-php'></div>
        </div>
      </div>
    </div>
    
  </section>
)

export default Skill

const skill_list = [
  {
    id:'html',
    name:'HTML',
    desc:{
      since:'Know this since High School / 2009',
      info:'From here I start to learn deeply in Collage as my major. Now continue learning HTML5.'
    }
  },

  {
    id:'css',
    name:'CSS / SCSS',
    desc:{
      since:'Know this since High School / 2009',
      info:'From here I start to learn deeply in Collage as my major. Now updgrade to preproccessing SCSS'
    }
  },

  {
    id:'js',
    name:'Javascript',
    desc:{since:'Know this since Collage / 2011',
      info:'Use as animation in HTML & Ajax (JQuery). Now upgrade to JS Framework'
    }
  },

  {
    id:'php',
    name:'PHP / CakePHP',
    desc:{since:'Know this since Collage / 2014',
      info:'2014 is my first time trying CakePHP Framework to develop website. My final project & Intership use PHP as my functional logic process.'
    }
  },

  {
    id:'mysql',
    name:'MySQL',
    desc:{since:'Know this since Collage / 2012',
      info:'Love with this topic, until I learn more deeply as Assitant Lecturer for Basis Data from 2013 until end of 2015.'
    }
  },

  {
    id:'react',
    name:'React',
    desc:{since:'Know this since working in Caption / 2015',
      info:'Implement React in Point On Sales Application for front desk in hotel and FNB in hotel restaurant. As you can see, i use it in my personal website to :D',
      familiar: 'Familiar with Redux, Lifecycle Component, State, Props, component'
    }
  },

  {
    id:'angular',
    name:'Angular',
    desc:{since:'Know this since working in Caption / 2016',
      info:'Implement angular in Customer Management System feature',
      familiar: 'Familiar with Scope, controller, directive'
    }
  },

  {
    id:'ror',
    name:'Ruby on Rails',
    desc:{since:'Know this since working in Caption / 2016',
      info:'Using Ruby on rails as a Framework for Angular 1. Beside that company profile also using this framework',
    }
  }
]
