'use client'

import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { submitSolution } from '@/libutils/submitSolution';

interface RightPaneProps {
  starterCode: string;
  testCases: {
    input: any;
    expected: any;
  }[];
}

function RightPane({starterCode, testCases}: RightPaneProps) {
  const [userCode, setUserCode] = useState(starterCode)
  
  const handleChange = (inputCode: string) => {
    setUserCode(inputCode)
  }

  const handleSubmit = () => {
    const userFunction = new Function(`return ${userCode}`)()
    const solutionArray = submitSolution(userFunction, testCases)
    console.log(solutionArray)
  }

  return (
    <div>
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
  )
}

export default RightPane