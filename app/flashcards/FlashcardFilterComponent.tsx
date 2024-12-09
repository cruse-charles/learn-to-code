'use client'

import { useState, useEffect } from 'react'
import FlashCard from '../components/flashcards/FlashCard'
import Filter from 'app/components/flashcards/Filter';

function FlashcardFilterComponent({categories, flashcards}) {

    const [selectedCategory, setSelectedCategory] = useState('All Categories')

    const filteredFlashcards = selectedCategory === 'All Categories' ? flashcards : flashcards.filter((flashcard) => flashcard.category === selectedCategory)

  return (
    <>
        <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
        {/* Grid layout for flashcards */}
        <div className="grid gap-8 grid-cols-2">
            {filteredFlashcards?.map((flashcard) => (
                <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer} category={flashcard.category}/>
            ))}
        </div>
    </>
  )
}

export default FlashcardFilterComponent