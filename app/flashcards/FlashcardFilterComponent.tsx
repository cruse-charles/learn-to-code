'use client'

import { useState } from 'react'
import FlashCard from '../components/flashcards/FlashCard'
import Filter from 'app/components/flashcards/Filter';

interface Flashcard {
    _id: string;
    question: string;
    answer: string;
    category: string;
}

interface FlashcardFilterComponentProps {
    flashcards: Flashcard[];
    categories: string[];
}


function FlashcardFilterComponent({categories, flashcards}: FlashcardFilterComponentProps) {

    // State to manage the selected category for filtering flashcards
    const [selectedCategory, setSelectedCategory] = useState('All Categories')

    // Filter flashcards based on the selected category
    const filteredFlashcards = selectedCategory === 'All Categories' ? flashcards : flashcards.filter((flashcard) => flashcard.category === selectedCategory)

  return (
    <>
        {/* Filter component to select categories */}
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