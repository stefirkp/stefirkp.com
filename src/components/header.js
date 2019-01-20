import React, {Component} from 'react'
import { navigate } from 'gatsby'
import Logo from '../components/layout/stefi'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_header: 0,
    };

  }
  componentDidMount(){
    window.addEventListener("scroll", scrollDetect);
    var that = this
    function scrollDetect() {
      var target = document.getElementById('intro-about').offsetTop - 250
      var scroll_position =  document.documentElement.scrollTop
      var tmp_active_header = 0
      if(scroll_position>=target){
        tmp_active_header = 1
      }

      if(that.state.active_header!=tmp_active_header){
        that.setState({active_header:tmp_active_header})
      }
    }
  }

  render(){
    const {active_header} = this.state
    
    return(
      <div className={'header '+(active_header==1?'active':'')}>
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
