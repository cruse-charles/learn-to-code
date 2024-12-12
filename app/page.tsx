'use client'
import Link from 'next/link';

import { useState } from 'react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl font-extrabold text-violet-600 mb-6'>Welcome to Learn2Code</h1>
        <p className='text-xl text-slate-600 mb-8'>A platform to help you learn programming concepts</p>
      </div>
      {/* Nav cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto text-center">
        <div className='bg-white rounded-lg shadow-md p-6 border border-violet-100'>
          <h2 className='text-xl font-bold text-violet-600 mb-2'>Flashcards</h2>
          <p className='text-xl text-slate-600 mb-8'>Test your knowledge by quizzing yourself</p>
          <a href='/flashcards' className='text-violet-600 font-medium hover:underline'>Start Learning →</a>
        </div>
        <Link href='/dsa'>DSA</Link>
        <Link href='/systems'>Systems</Link>
      </div>
    </div>
  );
}