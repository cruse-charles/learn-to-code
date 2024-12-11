import React from 'react'
import FlashCard from '../components/FlashCard'

async function FlashcardPage() {
  const response = await fetch('http://localhost:3000/api/flashcards')
  const {flashcards} = await response.json()

  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 dark:from-slate-950 dark:to-violet-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                Flashcards
              </h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                Test your knowledge with these interactive flashcards
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {flashcards?.map((flashcard) => (
              <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer}/>
            ))}
          </div>
    </div>
  </div>
  )
}

export default FlashcardPage