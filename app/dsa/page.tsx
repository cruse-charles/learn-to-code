'use client'

import SplitPane from 'react-split-pane';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

export default function page() {
  return (
    // @ts-ignore
    <SplitPane
    split="vertical" // Vertical split (left and right panes)
    minSize={200} // Minimum size of the left pane
    defaultSize="50%" // Default size of the left pane (percentage or pixels)
    className="split-pane"
  >
    {/* Left Pane */}
    <RightPane />
    

    {/* Right Pane */}
    <LeftPane />
  </SplitPane>
  )
}
