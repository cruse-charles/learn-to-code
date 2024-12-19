export default async function page() {

  // TODO: Fetch all questions from the database and display them as links.
  const response = await fetch('http://localhost:3000/api/dsa/all')
  const questions = await response.json()
  console.log(questions)

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className="mb-12">
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'>
            Data Structures & Algorithms
          </h1>
          <p className='mt-3 text-lg text-slate-600'>Practice coding problems to improve your DSA skills</p>
        </div>

        <div className='bg-white shadow-md rounded-lg p-6 border border-violet-100'>
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

          <div className='divide-y divide-gray-100'>
            {questions.map((question) => (
              <div className='block py-4 px-2 hover:bg-violet-50 rounded-md transition-colors'>
                <h3 className="font-medium text-lg text-slate-800">
                  {question.title}
                </h3>
                <p className="text-slate-600 text-sm">Short description</p>

                {/* tags */}
                <div className='flex flex-wrap gap-2 sm:justify-end'>
                  <span className='bg-violet-100 text-violet-600 px-2 py-1 rounded-md text-sm'>Easy</span>
                  <span className='bg-violet-100 text-violet-600 px-2 py-1 rounded-md text-sm'>linked list</span>
                  <span className='bg-violet-100 text-violet-600 px-2 py-1 rounded-md text-sm'>array</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}