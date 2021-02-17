import React from "react"

export const Div = (props, className)=>{
  const {children} = props
  return <div
    style={{...props}}
    className={`${className} ${props.cn? props.cn: ""}`}>
    {children}
    </div>
}



export const ColorSpan = (props) => {
  return (
    <>
      <span style={{background:props.color, borderRadius: "50%", color: "transparent", position: "relative", bottom: "1px" , border: "1px solid grey", marginBottom: "0.5rem", width: "100px", height: "100px"}}>red</span>
      <span style={{textTransform: "capitalize", fontSize: "1.2rem"}}>
        {` ${props.color.toUpperCase()} \n`} 
        {props.children}
      </span>
      <span style={{height: "1rem", display: "block", color: "transparent"}}/>
    </>
  )
}
