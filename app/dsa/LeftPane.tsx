import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

function LeftPane() {
  return (
    <>
        <CodeMirror 
            value='// Write your code here...'
            extensions={[javascript()]}
        />
    </>
  )
}

export default LeftPane