import React from 'react'
import FlashCard from '../components/FlashCard'

const layout = ({children}) => {
  return (
    <>
      <div>Flashcards</div>
      <div>Test your knowledge!</div>
      <FlashCard />
    </>
  )
}

export default layout