import React from "react"
import styled from "styled-components"

const myH2 = ({ children, title }) => {
  if (title) {
    return (
      <HeadingTwo>
        <h2>{children}</h2>
        <div className="underline"></div>
      </HeadingTwo>
    )
  }
  return (
    <h2
      style={{
        margin: "2rem 0",
        color: "var(--oldGrey)",
      }}
    >
      {children}
    </h2>
  )
}

const HeadingTwo = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--oldGrey);
  }
`

const kateH2 = props => {
  if(props.title){
    return ( 
      <>
      <h2 {...props}>{props.children}</h2>
      <div style={{
        width: '200px',
        height: '5px',
        background: 'var(--favoritePink)',
        margin: '0',
        marginLeft: '2%',
        marginBottom: '2rem',
        }} />
      </>
    )
  }
  return <h2 {...props}>{props.children}</h2>
}

const myH4 = props => {
  return (
    <h3 style={{ margin: "2rem 0", color: "var(--oldGrey)" }}>
      {props.children}
    </h3>
  )
}

export { myH2, myH4, kateH2 }
