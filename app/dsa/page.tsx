import Link from 'next/link';
import { Question } from '../../lib/types/types';

export default async function page() {

  // fetch all questions from the database
  const response = await fetch('http://localhost:3000/api/dsa/all')
  const questions = await response.json()

  return (
    // Background gradient and padding
    <div className='bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8'>
      
      {/* Main container */}
      <div className='max-w-4xl mx-auto'>
        
        {/* TODO: Header title is cut off, fix */}
        {/* Page header section */}
        <div className="mb-12">
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'>
            Data Structures & Algorithms
          </h1>
          <p className='mt-3 text-lg text-slate-600'>Practice coding problems to improve your DSA skills</p>
        </div>

        {/* Questions container */}
        <div className='bg-white shadow-md rounded-lg p-6 border border-violet-100'>

          {/* Questions header and filters */}
          <div className="flex justify-center items-center mb-6">
            <h2 className='text-2xl font-bold text-slate-800'>Problems</h2>
            {/* Difficulty buttons */}
            {/* <div className='flex gap-2'>
              <button className='bg-violet-500 text-white px-4 py-2 rounded-md'>All</button>
              <button className='bg-slate-200 text-slate-800 px-4 py-2 rounded-md'>Easy</button>
              <button className='bg-slate-200 text-slate-800 px-4 py-2 rounded-md'>Medium</button>
              <button className='bg-slate-200 text-slate-800 px-4 py-2 rounded-md'>Hard</button>
            </div> */}
          </div>

          {/* List of questions */}
          <div className='divide-y divide-gray-100'>
            {questions.map((question: Question) => (
              // Question Container
              <Link key={question._id} href={`/dsa/${question.title}`} className='block py-4 px-2 hover:bg-violet-50 rounded-md transition-colors'>
                
                {/* Question title and description */}
                <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
  
                  {/* Left side: Title and Description */}
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="font-medium text-lg text-slate-800">
                      {question.descriptionTitle}
                    </h3>
                    <p className="text-slate-600 text-sm">{question.shortDescription}</p>
                  </div>

                  {/* Right side: Tags (vertically centered) */}
                  <div className="flex flex-wrap gap-2 items-center justify-center self-center">
                    <div className={`rounded-xl px-2 py-1 font-semibold border text-xs
                      ${question.difficulty === "Easy" ? "bg-green-50 text-green-700 border-green-200" : ""}
                      ${question.difficulty === "Medium" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""}
                      ${question.difficulty === "Hard" ? "bg-red-50 text-red-700 border-red-200" : ""}
                    `}>
                      {question.difficulty}
                    </div>
                    {question.tags.map((tag) => (
                      <span key={tag} className='bg-violet-100 text-violet-600 px-2 py-1 rounded-xl text-xs border border-violet-200'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}