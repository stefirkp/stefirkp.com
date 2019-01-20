import React from 'react'

const RowLabel = ({label, value,className}) => (
   <div className={"row "+className}>
        <div className="label">{label}</div>
        <div className="value">{value}</div>
    </div>
)
export default RowLabel
