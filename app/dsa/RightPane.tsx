import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

function RightPane() {
  return (
        <CodeMirror 
            value='// Write your code here...'
            extensions={[javascript()]}
            className='cm cm-content'
        />
  )
}

export default RightPane