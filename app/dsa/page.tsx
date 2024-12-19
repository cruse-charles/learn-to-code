export default async function page() {

  // TODO: Fetch all questions from the database and display them as links.
  const response = await fetch('http://localhost:3000/api/dsa/all')
  const questions = await response.json()
  console.log(questions)

  return (
    <div>
      Data Structures & Algorithms. Learn about algorithms and data structures
    </div>
  )
}