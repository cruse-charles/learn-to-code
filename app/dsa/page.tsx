'use client'

import SplitPane from 'react-split-pane';

export default function page() {
  return (
    <SplitPane
    split="vertical" // Vertical split (left and right panes)
    minSize={200} // Minimum size of the left pane
    defaultSize="50%" // Default size of the left pane (percentage or pixels)
    className="split-pane"
  >
    {/* Left Pane */}
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Data Structures & Algorithms</h1>
      <p className="mt-4 text-gray-600">
        Learn about algorithms and data structures.
      </p>
    </div>

    {/* Right Pane */}
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div>Hi</div>
    </div>
  </SplitPane>
  )
}
