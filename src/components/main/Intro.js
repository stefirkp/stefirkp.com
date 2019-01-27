import React, { Component } from 'react'

export default class Intro extends Component {
  componentDidMount(){
    let text = ['a website developer', 'a front end developer', 'Craft Lover', 'Dog Lover','a developer']
    var counter = 0;
    var elem = document.getElementById("changer-txt");
    var inst = setInterval(change, 1500);

    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }
  }

  render(){
    return(
      <>
        <section className="intro-wrap">
          <div className="hello-txt">Hello</div>
          <div className="hello-txt-back">Stefi Rosadi</div>
          <div className="photo-wrap">
            <div className="photo"></div>
            <div className="content">
              <span>scroll down or </span>
              <span className='link-txt'><a href="https://drive.google.com/file/d/1Zo_wytH1qg3qXQC3hMOCoJY2QE3odc73/view?usp=sharing" download='stefirosadi-cv.pdf' target='_blank'>just view my resume</a></span>
            </div>
          </div>
        </section>
        
        <section className="intro-wrap-2" id='intro-about'>
        <div className="photo-wrap">
          <div className="photo-single" id='a'></div>
          {/* <div className="photo-single" id='b'></div>
          <div className="photo-single" id='c'></div>
          <div className="photo-single" id='d'></div> */}
        </div>

        <div className="intro-name">
          <div className="hello">Hello, I'm</div>
          <div className="name">Stefi Rosadi</div>
          {/* <div className="line"></div> */}
          <div className="changer-txt-wrap">
            <div id="changer-txt">a developer</div>
          </div>
        </div>
      </section>
      </>
    )
  } 
}
