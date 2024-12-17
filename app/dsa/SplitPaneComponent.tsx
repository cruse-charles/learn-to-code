'use client'

import SplitPane from 'react-split-pane';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

interface Question {
    id: string;
    title: string;
    description: string;
    descriptionExamples: {
        input: string[];
        output: string[];
        explanation: string[];
    };
    constraints: string;
    order: any;
    starterCode: string;
    testCases: {
      input: any;
      expected: any;
    }[];
}

interface SplitPaneComponentProps {
    question: Question;
}

export default function SplitPaneComponent({question}: SplitPaneComponentProps) {
  return (
    // @ts-ignore
    <SplitPane
    split="vertical"
    minSize={200}
    defaultSize="50%"
    className="split-pane"
  >
    {/* Right Pane */}
    <LeftPane title={question.title} description={question.description} descriptionExamples={question.descriptionExamples}/>

    {/* Left Pane */}
    <RightPane starterCode={question.starterCode} testCases={question.testCases}/>
  </SplitPane>
  )
}
