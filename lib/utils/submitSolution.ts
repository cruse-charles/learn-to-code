export function submitSolution(fn, testCases) {
    const results = [];

    for (const testCase of testCases) {
        const {input, expected} = testCase;
        const result = fn(...input);
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