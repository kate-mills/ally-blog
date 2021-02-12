import React from "react"
import styled from "styled-components"

export const Div = (props, className)=>{
  const {children} = props
  return <div
    style={{...props}}
    className={`${className} ${props.cn? props.cn: ""}`}>
    {children}
    </div>
}


const styledDiv = styled.div``

