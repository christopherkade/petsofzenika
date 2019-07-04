import React, { useState, useEffect } from "react"
import styled from "styled-components"

import animals from "./animals.json"
import { Header } from "components/Header"
import { AnimalCard } from "components/AnimalCard"

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
`

const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0.25rem;
  list-style: none;
`

const NoPetText = styled.p`
  font-size: 2rem;
`

/**
 * Shuffle our pet images and create 3 array of images for our columns
 * This is a weird work around to have images that fit no matter their size
 */
const shuffleImages = () => {
  let shuffleImages = animals.sort(() => Math.random() - 0.5)
  const size = Math.round((shuffleImages.length / 3))
  const columns = shuffleImages.map((_, index) => (
    index % size === 0
      ? shuffleImages.slice(index, index + size)
      : null
  )).filter(element => element)

  return columns
}

const App = () => {
  const [imageColumns, setImageColumn] = useState([])

  useEffect(() => {
    setImageColumn(shuffleImages())
  }, [])

  return (
    <>
      <Header />
      <Wrapper>
        {imageColumns.length > 0 ? imageColumns.map((col, index) => {
          return (
            <Column key={index}>
              {col.map(({ name, path }) => <AnimalCard name={name} image={process.env.PUBLIC_URL + '/images/' + path} key={name} />)}
            </Column>
          )
        }) :
          <NoPetText>
            No pet found. <span role="img" aria-label="">😿</span>
          </NoPetText>
        }
      </Wrapper>
    </>
  );
}

export default App;
