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

// // async function FlashcardPage() {
// function FlashcardPage() {

//   const [flashcards, setFlashcards] = useState<Flashcard[]>([])
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')

//   // fetch flashcards from the API
//   // const response = await fetch('http://localhost:3000/api/flashcards')
//   // const {flashcards}: {flashcards: Flashcard[]} = await response.json()

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const response = await fetch('http://localhost:3000/api/flashcards')
//       const {flashcards}: {flashcards: Flashcard[]} = await response.json()
//       setFlashcards(flashcards)
//     }

//     fetchFlashcards()
//   }, [])

//   const categories = ['All Categories', ...new Set(flashcards.map((flashcard) => flashcard.category))]

//   const filteredFlashcards = selectedCategory === 'All Categories' ? flashcards : flashcards.filter((flashcard) => flashcard.category === selectedCategory)

//   return (
//     // Main container for the page
//       <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
//         {/* Centered content container */}
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <SubHeader title={'Flashcards'} subtitle={'Test your knowledge with these interactive flashcards'}/>
//           <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
//           {/* Grid layout for flashcards */}
//           <div className="grid gap-8 grid-cols-2">
//             {filteredFlashcards?.map((flashcard) => (
//               <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer} category={flashcard.category}/>
//             ))}
//           </div>
//     </div>
//   </div>
//   )
// }




// // async function FlashcardPage() {
// function FlashcardPage() {

//   const [flashcards, setFlashcards] = useState<Flashcard[]>([])
//   const [selectedCategory, setSelectedCategory] = useState('All Categories')

//   // fetch flashcards from the API
//   // const response = await fetch('http://localhost:3000/api/flashcards')
//   // const {flashcards}: {flashcards: Flashcard[]} = await response.json()

//   useEffect(() => {
//     const fetchFlashcards = async () => {
//       const response = await fetch('http://localhost:3000/api/flashcards')
//       const {flashcards}: {flashcards: Flashcard[]} = await response.json()
//       setFlashcards(flashcards)
//     }

//     fetchFlashcards()
//   }, [])

//   const categories = ['All Categories', ...new Set(flashcards.map((flashcard) => flashcard.category))]

//   const filteredFlashcards = selectedCategory === 'All Categories' ? flashcards : flashcards.filter((flashcard) => flashcard.category === selectedCategory)

//   return (
//     // Main container for the page
//       <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
//         {/* Centered content container */}
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <SubHeader title={'Flashcards'} subtitle={'Test your knowledge with these interactive flashcards'}/>
//           <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
//           {/* Grid layout for flashcards */}
//           <div className="grid gap-8 grid-cols-2">
//             {filteredFlashcards?.map((flashcard) => (
//               <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer} category={flashcard.category}/>
//             ))}
//           </div>
//     </div>
//   </div>
//   )
// }





async function FlashcardPage() {

  // fetch flashcards from the API
  const response = await fetch('http://localhost:3000/api/flashcards')
  const {flashcards}: {flashcards: Flashcard[]} = await response.json()

  const categories = ['All Categories', ...new Set(flashcards.map((flashcard) => flashcard.category))]

  return (
    // Main container for the page
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Centered content container */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <SubHeader title={'Flashcards'} subtitle={'Test your knowledge with these interactive flashcards'}/>
          {/* <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/> */}
          {/* Grid layout for flashcards */}
          {/* <div className="grid gap-8 grid-cols-2">
            {filteredFlashcards?.map((flashcard) => (
              <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer} category={flashcard.category}/>
            ))}
          </div> */}
          <FlashcardFilterComponent categories={categories} flashcards={flashcards}/>
    </div>
  </div>
  )
}










export default FlashcardPage