import SubHeader from 'app/components/headers/SubHeader'

interface LeftPaneProps {
  title: string;
  description: string;
}

function LeftPane({title, description}: LeftPaneProps) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-100 to-violet-100 py-8 px-4 sm:px-4 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='bg-white rounded-lg shadow-md p-6 border border-violet-100 mb-6'>
          <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
          <div className='mb-6'>Description/Solution tabs</div>
          <div className='prose max-w-none'>
            <p className="text-slate-700 mb-6">{description}</p>
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Examples:</h3>
          <div className='mb-4 bg-slate-50 p-4 rounded-md'>
            <div className="mb-2">
              <div>Input:</div>
            </div>
            <div className="mb-2">
              <div>Output:</div>
            </div>
            <div className="mb-2">
              <div>Explanation:</div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Constraints:</h3>
        </div>
      </div>
    </div>
  )
}

export default LeftPane