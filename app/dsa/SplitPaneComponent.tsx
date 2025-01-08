'use client'

import SplitPane from 'react-split-pane';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

import { Question } from '../../lib/types/types';

interface SplitPaneComponentProps {
    question: Question;
}

export default function SplitPaneComponent({question}: SplitPaneComponentProps) {
  return (
    // @ts-ignore
    <SplitPane
    split="vertical"
    minSize={200}
    defaultSize="45%"
    className="split-pane-vertical"
  >
    {/* Right Pane */}
    <LeftPane question={question}/>

    {/* Left Pane */}
    <RightPane question={question}/>
  </SplitPane>
  )
}
