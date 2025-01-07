'use client'

import SplitPane from 'react-split-pane';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

interface Example {
  input: string;
  output: string;
  explanation: string;
};

interface Question {
    id: string;
    description: string;
    descriptionExamples: Example[];
    constraints: string;
    order: any;
    starterCode: string;
    testCases: {
      input: any;
      expected: any;
    }[];
    difficulty: string;
    tags: string[];
    descriptionTitle: string;
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
    defaultSize="45%"
    className="split-pane-vertical"
  >
    {/* Right Pane */}
    <LeftPane tags={question.tags} difficulty={question.difficulty} descriptionTitle={question.descriptionTitle} description={question.description} descriptionExamples={question.descriptionExamples}/>

    {/* Left Pane */}
    <RightPane starterCode={question.starterCode} testCases={question.testCases} descriptionExamples={question.descriptionExamples}/>
  </SplitPane>
  )
}
