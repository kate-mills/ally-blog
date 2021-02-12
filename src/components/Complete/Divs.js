import React from "react"

export const Div = (props, className)=>{
  const {children} = props
  return <div
    style={{...props}}
    className={`${className} ${props.cn? props.cn: ""}`}>
    {children}
    </div>
}
