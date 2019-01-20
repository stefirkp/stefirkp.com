import React, { Component } from "react"
import RowLabel from '../../layout/RowLabel'

class ASkill extends Component {
    renderDesc(key){
        const {askill} = this.props
        var data = askill.desc[key]
        return(
            <RowLabel key={key} label={''} value={data} className={key}/>
        )
    }
    render() {
        const {askill} = this.props 
        var renderDesc
        if(askill && askill.desc){
            renderDesc = Object.keys(askill.desc).map(this.renderDesc.bind(this))
        }
        return (
            <div className="a-skill " id={askill.id}>
                <div className="box"></div>
                <div className="box-title">{askill.name}</div>
                <div className="detail-skill-wrap">
                    <div className="desc">
                        {renderDesc}
                    </div>
                </div>
            </div>
      )
    }
  }
  
  export default ASkill