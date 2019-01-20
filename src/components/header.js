import React, {Component} from 'react'
import { navigate } from 'gatsby'
import Logo from '../components/layout/stefi'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_header: 0,
      customClass:''
    };

  }
  componentDidMount(){
    window.addEventListener("scroll", scrollDetect);
    var that = this
    function scrollDetect() {
      var target = 0
      var customClass = ''
      var tmp_active_header = 0
      if(document.getElementById('intro-about')!=null){
        target = document.getElementById('intro-about').offsetTop - 250
      }else if(document.querySelector(".top-detail")!=null){
        target = document.querySelector(".top-detail").offsetHeight - 100
        customClass = 'transparent-bg'
        tmp_active_header = 1
      }else{
        tmp_active_header = 1
      }

      var scroll_position =  document.documentElement.scrollTop
      if(scroll_position>=target){
        tmp_active_header = 1
        customClass = ''
      }

      if(that.state.active_header!=tmp_active_header){
        that.setState({active_header:tmp_active_header})
      }
      if(that.state.customClass!=customClass){
        that.setState({customClass:customClass})
      }
    }
  }

  render(){
    const {active_header} = this.state
    const {page} = this.props 
    
    var customClass = ''
    if(page!=undefined){
      if(active_header==0){
        customClass = 'active transparent-bg'
      }

      if(this.state.customClass!=''){
        customClass = this.state.customClass
      }
      customClass+=' '+page
    }
    return(
      <div className={'header '+(active_header==1?'active':'')+' '+customClass}>
        <div className="header-wrap">
          <div className="left">
            <div className="logo" onClick={ () => navigate('/')} >
              <Logo></Logo>
            </div>
          </div>
          <div className="right">
            <div className="nav-list">
              <div className="a-nav" onClick={ () => navigate('/#intro-about')}>About</div>
              <div className="a-nav" onClick={ () => navigate('/#skill')}>Skill</div>
              <div className="a-nav" onClick={ () => navigate('/#portfolio')}>Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}
