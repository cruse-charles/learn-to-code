export interface Question {
  _id: string;
  title: string;
  description: string;
  descriptionExamples: Example[];
  constraints: string;
  order: any;
  starterCode: string;
  testCases: {
    input: any;
    expected: any;
  }[];
  shortDescription: string;
  difficulty: string;
  tags: string[];
  descriptionTitle: string;
}

export interface Example {
  input: string;
  output: string;
  explanation: string;
};