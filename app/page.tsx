'use client'
import CodeEditor from './components/CodeEditor';
import CodeOutput from './components/CodeOutput';
import Question from './components/Question';

import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('// Write your code here');
  const [outputCode, setOutputCode] = useState(code)

  const runCode = () => {
    setOutputCode(code)
  }

  return (
    <div style={{display: 'flex', height: '100vh'}}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <Question />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <CodeEditor setCode={setCode} runCode={runCode}/>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <CodeOutput code={outputCode}/>
        </div>
    </div>
  );
}