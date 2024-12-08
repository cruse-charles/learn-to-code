import React from 'react'
import FlashCard from '../components/FlashCard'

async function FlashcardPage() {
  const response = await fetch('http://localhost:3000/api/flashcards')
  const {flashcards} = await response.json()

  return (
    <>
      {flashcards?.map((flashcard) => (
        <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer}/>
      ))}
    </>
  )
}

export default FlashcardPage