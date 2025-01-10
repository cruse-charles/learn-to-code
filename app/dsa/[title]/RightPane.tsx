'use client'

import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { submitSolution } from '@/lib/utils/submitSolution';
import SplitPane from 'react-split-pane';

import { Question, TestResult } from '../../../lib/types/types';
import TestCaseComponent from './TestCaseComponent';

interface RightPaneProps {
  question: Question;
}

function RightPane({question}: RightPaneProps) {
  // Destructure question object to get relevant properties
  const { starterCode, testCases } = question;

  // track user's code in the editor and the test results
  const [userCode, setUserCode] = useState(starterCode)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  
  const handleChange = (inputCode: string) => {
    setUserCode(inputCode)
  }

  // Handle the "Run Code" button
  const handleSubmit = () => {
    // Create a new function from the user's code
    const userFunction = new Function(`return ${userCode}`)()

    // Call the function with test cases
    setTestResults(submitSolution(userFunction, testCases))
  }

  // TODO: If there is an error from the user's code, display it in the output section

  return (
      //@ts-ignore
      <SplitPane
      split="horizontal"
      className="split-pane-horizontal overflow-auto h-full"
      minSize={200}
      defaultSize="55%"
    >
      
    {/* Code Editor and Run Button Container */}
    <div className='w-full overflow-auto h-full'>
            {/* Header */}
      <div className="bg-slate-100 px-4 py-2 border-slate-200 flex justify-between items-center">
        <h3 className="font-medium">Code</h3>
        <button onClick={handleSubmit} className='bg-violet-500 text-white px-3 py-1 rounded-md'>Run</button>
      </div>
      <CodeMirror 
          value={starterCode}
          extensions={[javascript()]}
          className='cm cm-content'
          onChange={handleChange}
      />
    </div>
    
    {/* Test Cases and Details */}
    <div className='overflow-auto h-full'>
      <TestCaseComponent question={question} testResults={testResults}/>
    </div>
    </SplitPane>
  )
}

export default RightPane