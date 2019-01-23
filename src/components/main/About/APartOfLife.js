import React from 'react'

const APartOfLife = ({aLife}) => {
    return(
        <div className="a-part-of-life" id={aLife.id}>
            <div className="left">
                <div className="label">{aLife.location}</div>
                <div className="year-label">{aLife.year}</div>
            </div>
            <div className="right">
                <div className="icon"></div>
                <div className="detail-wrap">
                    <div className="label-detail">{aLife.title}</div>
                    <div className="desc-detail">{aLife.desc}</div>
                </div>

                {/* <div className="ornament">
                    <div className="line"></div>
                    <div className="dot"></div>
                </div> */}
            </div>
        </div>
    )
}

export default APartOfLife
