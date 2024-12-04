'use client'
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = code;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={(value) => setCode(value || '')}
        />
        <button onClick={runCode}>Run</button>
      </div>
      <div style={{ flex: 1 }}>
        <iframe ref={iframeRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default CodeEditor;