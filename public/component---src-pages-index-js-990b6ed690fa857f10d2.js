(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(144),r=t(6),i=t.n(r),s=t(172),o=t.n(s),m=function(e){function a(){return e.apply(this,arguments)||this}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=["a website developer","a front end developer","Craft Lover","Dog Lover","a developer"],a=0,t=document.getElementById("changer-txt");setInterval(function(){t.innerHTML=e[a],++a>=e.length&&(a=0)},1500)},t.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"intro-wrap"},l.a.createElement("div",{className:"hello-txt"},"Hello"),l.a.createElement("div",{className:"hello-txt-back"},"Stefi Rosadi"),l.a.createElement("div",{className:"photo-wrap"},l.a.createElement("div",{className:"photo"}),l.a.createElement("div",{className:"content"},l.a.createElement("span",null,"scroll down or "),l.a.createElement("span",{className:"link-txt"},l.a.createElement("a",{href:o.a,download:"stefirosadi-cv.pdf",target:"_blank",rel:"noopener noreferrer"},"just view my resume"))))),l.a.createElement("section",{className:"intro-wrap-2",id:"intro-about"},l.a.createElement("div",{className:"photo-wrap"},l.a.createElement("div",{className:"photo-single",id:"a"})),l.a.createElement("div",{className:"intro-name"},l.a.createElement("div",{className:"hello"},"Hello, I'm"),l.a.createElement("div",{className:"name"},"Stefi Rosadi"),l.a.createElement("div",{className:"changer-txt-wrap"},l.a.createElement("div",{id:"changer-txt"},"a developer")))))},a}(c.Component),d=(t(67),t(47),t(157),function(e){var a=e.aLife;return l.a.createElement("div",{className:"a-part-of-life",id:a.id},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"label"},a.location),l.a.createElement("div",{className:"year-label"},a.year)),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"icon"}),l.a.createElement("div",{className:"detail-wrap"},l.a.createElement("div",{className:"label-detail"},a.title),l.a.createElement("div",{className:"desc-detail"},a.desc))))}),p=function(e){function a(){return e.apply(this,arguments)||this}i()(a,e);var t=a.prototype;return t.renderLife=function(e){return l.a.createElement(d,{key:e,aLife:v[e]})},t.render=function(){var e;return v&&(e=Object.keys(v).map(this.renderLife.bind(this))),l.a.createElement("section",{className:"about-wrap",id:"about"},l.a.createElement("div",{className:"title"},"Let me summarize my life so far"),l.a.createElement("div",{className:"life-list-wrap"},e))},a}(c.Component),v=[{id:"caption",location:"WIR Global",year:"April 2019 - Now",title:"Front End Developer",desc:"Join in Mindstore unit as a Senior Front End Developer. Create web application based on client request, such as Bidding Application. This application provide bidding between hotel and supplier. Implement using react – redux. "},{id:"caption",location:"Caption Hospitality",year:"Des 2015 - January 2019",title:"Front End Developer",desc:"Create application for hotel industry, such as Point of Sales for front desk and restaurant, Product Profile, and Center Management System. From here i learn about React JS, Ruby on Rails, Angular, and preprocessor CSS as SCSS. Increase my skill day by day by learning how to create clean code, so another member can develop easily."},{id:"ukdw",location:"Duta Wacana Christian University",year:"2011 - 2015",title:"Bachelor of Informatic",desc:'Finish my study with final project "Museum Recommender System using Slope One Algorithm". Became lecture assistant for basic knowledge of database with oracle and Web Development since 2013. Also a part of tutor team to teach discrete mathematics to informatics engineering student of DWCU.'},{id:"pptpm",location:"PPTPM DWCU",year:"2012 - 2014",title:"Multimedia",desc:"PPTPM “Pusat Pengembangan Pengajaran dan Multimedia”  is a multimedia center unit in DWCU. I was voluter who documenting any campus event like Graduation. From here i learn how to edit movie, create packaging, and work in team. Beside that I also maintance multimedia devices classroom. Make sure projector and computer working well."}],E=(t(174),function(e){var a=e.label,t=e.value,c=e.className;return l.a.createElement("div",{className:"row "+c},l.a.createElement("div",{className:"label"},a),l.a.createElement("div",{className:"value"},t))}),u=function(e){function a(){return e.apply(this,arguments)||this}i()(a,e);var t=a.prototype;return t.renderDesc=function(e){var a=this.props.askill.desc[e];return l.a.createElement(E,{key:e,label:"",value:a,className:e})},t.render=function(){var e,a=this.props.askill;return a&&a.desc&&(e=Object.keys(a.desc).map(this.renderDesc.bind(this))),l.a.createElement("div",{className:"a-skill ",id:a.id},l.a.createElement("div",{className:"box"}),l.a.createElement("div",{className:"box-title"},a.name),l.a.createElement("div",{className:"detail-skill-wrap"},l.a.createElement("div",{className:"desc"},e)))},a}(c.Component),N=function(){return l.a.createElement("section",{className:"skill-wrap",id:"skill"},l.a.createElement("div",{className:"skill-wrap-2"},l.a.createElement("div",{className:"main-skill"},l.a.createElement("div",{className:"title"},"Here's a few things I'm experienced with:"),l.a.createElement("div",{className:"list-skill"},b.map(function(e,a){return l.a.createElement(u,{key:a,askill:e})}))),l.a.createElement("div",{className:"support-skill"},l.a.createElement("div",{className:"title"},"Also know about"),l.a.createElement("div",{className:"list-skill-additional"},l.a.createElement("div",{className:"add-skill",id:"git"}),l.a.createElement("div",{className:"add-skill",id:"mern"}),l.a.createElement("div",{className:"add-skill",id:"gatsby"}),l.a.createElement("div",{className:"add-skill",id:"cake-php"})))))},b=[{id:"html",name:"HTML",desc:{since:"Know this since High School / 2009",info:"From here I start to learn deeply in Collage as my major. Now continue learning HTML5."}},{id:"css",name:"CSS / SCSS",desc:{since:"Know this since High School / 2009",info:"From here I start to learn deeply in Collage as my major. Now updgrade to preproccessing SCSS"}},{id:"js",name:"Javascript",desc:{since:"Know this since Collage / 2011",info:"Use as animation in HTML & Ajax (JQuery). Now upgrade to JS Framework"}},{id:"php",name:"PHP / CakePHP",desc:{since:"Know this since Collage / 2014",info:"2014 is my first time trying CakePHP Framework to develop website. My final project & Intership use PHP as my functional logic process."}},{id:"mysql",name:"MySQL",desc:{since:"Know this since Collage / 2012",info:"Love with this topic, until I learn more deeply as Assitant Lecturer for Basis Data from 2013 until end of 2015."}},{id:"react",name:"React",desc:{since:"Know this since working in Caption / 2015",info:"Implement React in Point On Sales Application for front desk in hotel and FNB in hotel restaurant. As you can see, i use it in my personal website to :D",familiar:"Familiar with Redux, Lifecycle Component, State, Props, component"}},{id:"angular",name:"Angular",desc:{since:"Know this since working in Caption / 2016",info:"Implement angular in Customer Management System feature",familiar:"Familiar with Scope, controller, directive"}},{id:"ror",name:"Ruby on Rails",desc:{since:"Know this since working in Caption / 2016",info:"Using Ruby on rails as a Framework for Angular 1. Beside that company profile also using this framework"}}],w=t(150),g=function(){return l.a.createElement("section",{className:"portofolio-wrap",id:"portfolio"},l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"title"},"Let's build something amazing"),l.a.createElement("div",{className:"content"},"I have hardwired desire to be better, an instinct for best user experience."),l.a.createElement("div",{className:"content"},"With every line code, I strive to make the web a beautifull place")),l.a.createElement("div",{className:"porto-list"},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"a-porto w65percnt h600",id:"pms",onClick:function(){return Object(w.navigate)("/PortofolioDetail/pms")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"PMS"),l.a.createElement("div",{className:"summary-project"},"A hotel property management application")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w35percnt h600",id:"fnb",onClick:function(){return Object(w.navigate)("/PortofolioDetail/fnb")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"FNB"),l.a.createElement("div",{className:"summary-project"},"Record all guest request for hotel restaurant")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END"))),l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"a-porto w3column h600",id:"crs",onClick:function(){return Object(w.navigate)("/PortofolioDetail/crs")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"CRS"),l.a.createElement("div",{className:"summary-project"},"Central Management System ")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w3column h600",id:"capthos",onClick:function(){return Object(w.navigate)("/PortofolioDetail/caphost")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Caption Hospitality"),l.a.createElement("div",{className:"summary-project"},"A product and company profile ")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w3column h600",id:"be",onClick:function(){return Object(w.navigate)("/PortofolioDetail/be")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Booking Engine"),l.a.createElement("div",{className:"summary-project"},"An application hotel to booking room")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END"))),l.a.createElement("div",{className:"col-2-ori"},l.a.createElement("div",{className:"a-porto w2column h600",id:"hotel-template",onClick:function(){return Object(w.navigate)("/PortofolioDetail/ht")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Hotel Template"),l.a.createElement("div",{className:"summary-project"},"A hotel profile ")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w2column h600",id:"pos",onClick:function(){return Object(w.navigate)("/PortofolioDetail/pos")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"POS"),l.a.createElement("div",{className:"summary-project"},"Point of Sales for Hotelier")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END"))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"a-porto w65percnt h600",id:"jupiter",onClick:function(){return Object(w.navigate)("/PortofolioDetail/jupiter")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Jupiter Chain"),l.a.createElement("div",{className:"summary-project"},"A website profile for marketing industry.")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w35percnt h600",id:"falcon",onClick:function(){return Object(w.navigate)("/PortofolioDetail/falcon")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"}),l.a.createElement("div",{className:"summary-project"},"Modern way to deploy database changes.")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END"))),l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"a-porto w2column h600",id:"pricentric",onClick:function(){return Object(w.navigate)("/PortofolioDetail/pricentric")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"}),l.a.createElement("div",{className:"summary-project"},"Powerful Pharmaceutical Pricing Database ")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END")),l.a.createElement("div",{className:"a-porto w2column h600",id:"borderless",onClick:function(){return Object(w.navigate)("/PortofolioDetail/borderless")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"}),l.a.createElement("div",{className:"summary-project"},"Simple. Secure. Payments.  Pay anywhere the same way.")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT | FRONT END"))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"a-porto  w65percnt h600",id:"museum-recomender",onClick:function(){return Object(w.navigate)("/PortofolioDetail/museum")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Museum Recommender"),l.a.createElement("div",{className:"summary-project"},"Explore the museum from good recommender")),l.a.createElement("div",{className:"label-project button-project"},"FINAL PROJECT ")),l.a.createElement("div",{className:"a-porto w35percnt h600",id:"arsip-fak",onClick:function(){return Object(w.navigate)("/PortofolioDetail/archive-letter")},role:"link"},l.a.createElement("div",{className:"bg-card"}),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Archive Letter Informatic Faculty"),l.a.createElement("div",{className:"summary-project"},"From tradisional to modern way")),l.a.createElement("div",{className:"label-project button-project"},"INTERSHIP"))),l.a.createElement("div",{className:"col-1"},l.a.createElement("div",{className:"a-porto w100percnt h400",id:"personal-website",onClick:function(){return Object(w.navigate)("/PortofolioDetail/personal-website")},role:"link"},l.a.createElement("div",{className:"bg-card-custom"},l.a.createElement("div",{className:"bg-card-side"}),l.a.createElement("div",{className:"bg-card-pct"}),l.a.createElement("div",{className:"bg-card-pct-2"})),l.a.createElement("div",{className:"button-next button-project"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1",id:"Layer_1",viewBox:"0 0 512 512"},l.a.createElement("path",{className:"st0",d:"M28.8,296.2L28,296l342.6,0L262.9,403.9c-5.3,5.3-8.2,12.4-8.2,19.9c0,7.5,2.9,14.6,8.2,19.9l16.8,16.8 c5.3,5.3,12.3,8.2,19.8,8.2c7.5,0,14.5-2.9,19.8-8.2l184.6-184.6c5.3-5.3,8.2-12.3,8.2-19.8c0-7.5-2.9-14.6-8.2-19.9L319.2,51.5 c-5.3-5.3-12.3-8.2-19.8-8.2c-7.5,0-14.5,2.9-19.8,8.2l-16.8,16.8c-5.3,5.3-8.2,12.3-8.2,19.8c0,7.5,2.9,14.1,8.2,19.4L371.8,216 l-343.4,0C13,216,0,229.3,0,244.8l0,23.7C0,283.9,13.3,296.2,28.8,296.2z"}))),l.a.createElement("div",{className:"project-title"},l.a.createElement("div",{className:"big-title"},"Personal Website"),l.a.createElement("div",{className:"summary-project"},"Watch me, then know me better")),l.a.createElement("div",{className:"label-project button-project"},"WEB DEVELOPMENT")))))};a.default=function(){return l.a.createElement(n.a,null,l.a.createElement(m,null),l.a.createElement(p,null),l.a.createElement(N,null),l.a.createElement(g,null))}},157:function(e,a,t){var c=t(28),l=t(31);t(173)("keys",function(){return function(e){return l(c(e))}})},172:function(e,a,t){e.exports=t.p+"static/CV Stefi Rosadi-6151226828eb42558f6e60eced1e6363.pdf"},173:function(e,a,t){var c=t(21),l=t(15),n=t(23);e.exports=function(e,a){var t=(l.Object||{})[e]||Object[e],r={};r[e]=a(t),c(c.S+c.F*n(function(){t(1)}),"Object",r)}},174:function(e,a,t){var c=t(22).f,l=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in l||t(14)&&c(l,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-990b6ed690fa857f10d2.js.map