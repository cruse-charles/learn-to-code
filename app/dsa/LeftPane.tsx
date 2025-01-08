import { Question } from '../../lib/types/types';

interface LeftPaneProps {
  question: Question;
}

function LeftPane({question}: LeftPaneProps) {
  // Destructure question object to get relevant properties
  const { descriptionTitle, description, descriptionExamples } = question; 

  return (
    // background gradient and padding
    <div className='min-h-screen bg-gradient-to-b from-slate-100 to-violet-100 py-8 px-4 sm:px-4 lg:px-8'>
      
      {/* Card wrapper */}
      <div className='max-w-6xl mx-auto'>

        {/* Card container for question information */}
        <div className='bg-white rounded-lg shadow-md p-6 border border-violet-100 mb-6'>
          
          {/* Title and Placeholder for tabs */}
          <h1 className="text-2xl font-bold text-slate-800">{descriptionTitle}</h1>
          <div className='mb-6'>Description/Solution tabs</div>
          
          {/* Description of problem */}
          <div className='prose max-w-none'>
            <p className="text-slate-700 mb-6">{description}</p>
          </div>
          
          {/* Examples section, iterate through example information */}
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Examples:</h3>
          {descriptionExamples.map((example, index) => (
            <div className='mb-4 bg-slate-50 p-4 rounded-md'>
              <div className="mb-2">
                <div>Input: {example.input}</div>
              </div>
              <div className="mb-2">
                <div>Output: {example.output}</div>
              </div>
              <div className="mb-2">
                <div>Explanation: {example.explanation}</div>
              </div>
            </div>
          ))}
          {/* <h3 className="text-lg font-semibold text-slate-800 mb-2">Constraints:</h3> */}
        </div>
      </div>
    </div>
  )
}

export default LeftPane