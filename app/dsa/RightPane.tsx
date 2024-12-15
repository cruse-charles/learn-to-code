import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

interface RightPaneProps {
  starterCode: string;
}

function RightPane({starterCode}: RightPaneProps) {
  return (
        <CodeMirror 
            value={starterCode}
            extensions={[javascript()]}
            className='cm cm-content'
        />
  )
}

export default RightPane