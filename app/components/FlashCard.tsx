import React from 'react'

const FlashCard = ({question, answer}) => {
  console.log('Flashcard Component, checking passed in data', question, answer)
  return (
    <>
      <div>{question}</div>
      <div>{answer}</div>
      <div>Hello</div>
    </>
  )
}

export default FlashCard