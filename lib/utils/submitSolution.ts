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

    // Iterate through each test case
    for (const testCase of testCases) {
        const {input, expected} = testCase;

        // Handle input type (array or single value)
        const result = Array.isArray(input) ? fn(...input) : fn(input);

        // Compare the result with the expected output and store in results array
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