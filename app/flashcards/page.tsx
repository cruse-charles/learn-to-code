// 'use client'

import FlashCard from '../components/flashcards/FlashCard'
import SubHeader from 'app/components/headers/SubHeader';
import Filter from 'app/components/flashcards/Filter';
import FlashcardFilterComponent from './FlashcardFilterComponent'

import { useState, useEffect } from 'react'

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

  // create an array of categories from the flashcards
  const categories = ['All Categories', ...new Set(flashcards.map((flashcard) => flashcard.category))]

  return (
    // Main container for the page
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Centered content container */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SubHeader title={'Flashcards'} subtitle={'Test your knowledge with these interactive flashcards'}/>
        {/* Component for flashcards and filter */}
        <FlashcardFilterComponent categories={categories} flashcards={flashcards}/>
      </div>
    </div>
  )
}










export default FlashcardPage