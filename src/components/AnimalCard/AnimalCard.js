import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const PetImage = styled.img`
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  margin-top: 1%;
  vertical-align: middle;
  max-width: 100%;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`

const PetName = styled.h2`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0.2rem 0;
  font-weight: 300;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const AnimalCard = ({ image, name }) => {
  return (
    <Wrapper>
      <PetImage src={image} />
      <PetName>{name}</PetName>
    </Wrapper>
  )
}

export default AnimalCard
