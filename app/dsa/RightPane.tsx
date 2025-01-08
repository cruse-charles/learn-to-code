'use client'

import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { submitSolution } from '@/libutils/submitSolution';
import SplitPane from 'react-split-pane';

interface Example {
  input: string;
  output: string;
  explanation: string;
};

interface RightPaneProps {
  starterCode: string;
  descriptionExamples: Example[];
  testCases: {
    input: any;
    expected: any;
  }[];
}

function RightPane({starterCode, testCases, descriptionExamples}: RightPaneProps) {
  // track user's code in the editor
  const [userCode, setUserCode] = useState(starterCode)
  const [selectedTestCase, setSelectedTestCase] = useState(0)
  const [solutionArray, setSolutionArray] = useState([])
  
  const handleChange = (inputCode: string) => {
    setUserCode(inputCode)
  }

  // Handle the "Run Code" button
  const handleSubmit = () => {
    // Create a new function from the user's code
    const userFunction = new Function(`return ${userCode}`)()

    // Call the function with test cases
    // const solutionArray = submitSolution(userFunction, testCases)
    setSolutionArray(submitSolution(userFunction, testCases))
    console.log(solutionArray)
    // TODO: Display the results
  }

  const handleExampleClick = (index) => {
    setSelectedTestCase(index)
    console.log(index)
  }

  // TODO: If there is an error from the user's code, display it in the output section

  return (
    // @ts-ignore
    <SplitPane
    split="horizontal"
    className="split-pane-horizontal"
    minSize={200}
    defaultSize="55%"
  >
    <div className='w-full'>
      <CodeMirror 
          value={starterCode}
          extensions={[javascript()]}
          className='cm cm-content'
          onChange={handleChange}
      />
        <div>
          <button onClick={handleSubmit} className='bg-violet-500 text-white px-4 py-2 rounded-md mt-4'>Run Code</button>
        </div>
    </div>
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="bg-slate-100 px-4 py-2 border-slate-200">
          <h3 className="font-medium">Test Results</h3>
      </div>
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
  </SplitPane>
  )
}

export default RightPane