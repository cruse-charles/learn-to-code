'use client'

import SplitPane from 'react-split-pane';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

export default function SplitPaneComponent({question}) {
  return (
    // @ts-ignore
    <SplitPane
    split="vertical"
    minSize={200}
    defaultSize="50%"
    className="split-pane"
  >
    {/* Right Pane */}
    <LeftPane title={question.title}/>

    {/* Left Pane */}
    <RightPane />
  </SplitPane>
  )
}
