import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Header = () => {
  return (
    <>
      <Title>
        <span role="img" aria-label="">🐱🐶</span> Pets of Zenika <span role="img" aria-label="">🦄🐰</span>
      </Title>
    </>
  )
}

export default Header
