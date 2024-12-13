import React from 'react'
import FlashCard from '../components/FlashCard'
import Header from 'app/components/Header';

interface Flashcard {
  _id: string;
  question: string;
  answer: string;
  category: string;
}

async function FlashcardPage() {
  // fetch flashcards from the API
  const response = await fetch('http://localhost:3000/api/flashcards')
  const {flashcards}: {flashcards: Flashcard[]} = await response.json()

  return (
    // Main container for the page
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Centered content container */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Header title={'Flashcards'} subtitle={'Test your knowledge with these interactive flashcards'}/>
          {/* Grid layout for flashcards */}
          <div className="grid gap-8 grid-cols-2">
            {flashcards?.map((flashcard) => (
              <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer} category={flashcard.category}/>
            ))}
          </div>
    </div>
  </div>
  )
}

export default FlashcardPage