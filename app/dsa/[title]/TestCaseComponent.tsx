import {useState} from 'react';

function TestCaseComponent({question, solutionArray}: any) {
    const { descriptionExamples } = question;

    const [selectedTestCase, setSelectedTestCase] = useState(0)

    const handleExampleClick = (index: number) => {
        setSelectedTestCase(index)
    }

  return (
    // Test Case Container
   <div className="bg-white rounded-lg overflow-hidden">

      {/* Header */}
      <div className="bg-slate-100 px-4 py-2 border-slate-200">
          <h3 className="font-medium">Test Results</h3>
      </div>

      {/* Test Case Tabs */}
      <div className="flex p-4 h-[calc(100%-56px)] overflow-auto">
        {descriptionExamples.map((_, index) => (
          <div
            key={index}
            onClick={() => handleExampleClick(index)}
            className={`
              px-4 py-2 cursor-pointer text-center transition
              ${selectedTestCase === index ? 'bg-white font-semibold border-b-2 border-violet-500' : 'bg-slate-100'}
              flex-1
            `}
          >
            {/* Status dot */}
            {solutionArray[index] && (
              <span
                className={`inline-block w-2 h-2 rounded-full mr-1
                  ${solutionArray[index]?.isCorrect ? 'bg-green-500' : 'bg-red-500'}
                `}
              />
            )}
            Test Case {index + 1}
          </div>
        ))}
      </div>

      {/* Selected Test Case Details */}
      <div className="mb-3">
        <span className="font-medium w-full m-4">Test Case {selectedTestCase + 1}</span>
        <div className={`m-4 p-4 rounded-md border ${
                        solutionArray[selectedTestCase]?.isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                      }`}>
          <div>Input: {descriptionExamples[selectedTestCase]?.input}</div>
          <div>Expected: {descriptionExamples[selectedTestCase]?.output}</div>
          <div>Output: {JSON.stringify(solutionArray[selectedTestCase]?.result)}</div>
        </div>
      </div>
    </div>
  )
}

export default TestCaseComponent