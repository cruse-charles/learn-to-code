interface TestCase {
    input: any;
    expected: any;
}

interface TestResult {
    input: any;
    expected: any;
    result: any;
    isCorrect: boolean;
}

export function submitSolution(fn: (...args: any[]) => any, testCases:TestCase[]): TestResult[] {
    const results = [];

    for (const testCase of testCases) {
        const {input, expected} = testCase;
        const result = Array.isArray(input) ? fn(...input) : fn(input);

        const isCorrect = JSON.stringify(result) === JSON.stringify(expected);
        results.push({
            input,
            expected,
            result,
            isCorrect
        })
    }
    return results;
}