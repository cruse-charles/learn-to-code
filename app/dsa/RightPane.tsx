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
  
  const handleChange = (inputCode: string) => {
    setUserCode(inputCode)
  }

  // Handle the "Run Code" button
  const handleSubmit = () => {
    // Create a new function from the user's code
    const userFunction = new Function(`return ${userCode}`)()

    // Call the function with test cases
    const solutionArray = submitSolution(userFunction, testCases)
    console.log(solutionArray)
    // TODO: Display the results
  }

  const handleExampleClick = (index) => {
    setSelectedTestCase(index)
  }

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
    <div className="bg-white rounded-lg shadow-md border border-violet-100 overflow-hidden">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
          <h3 className="font-medium">Test Results</h3>
      </div>
      <div className='flex items-center'>
        {descriptionExamples.map((_, index) => (
          <div>
            <div onClick={()=>handleExampleClick(index)}>Test Case {index + 1}</div>
          </div>
        ))}
      </div>
      <div>
        <div>Input: {descriptionExamples[selectedTestCase]?.input}</div>
        <div>Output: {descriptionExamples[selectedTestCase]?.output}</div>
      </div>
    </div>

  </SplitPane>
  )
}

export default RightPane