export default async function page({params}) {
    const {title} = await params
    const reponse = await fetch(`http://localhost:3000/api/dsa?title=${title}`)
    const question = await reponse.json()

  return (
    <>
        <div>Parms title: {title}</div>
        <div>Fetching question: {question.title}</div>
    </>
  )
}