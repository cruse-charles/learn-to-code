'use client'
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    setCode: (code: string) => void;
    runCode: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({setCode, runCode}) => {

  return (
    <>
        <Editor
          height="100%"
          theme='vs-dark'
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={(value) => setCode(value || '')}
          />
        <button onClick={runCode}>Run</button>
    </>
  );
};

export default CodeEditor;