import SplitPaneComponent from "./SplitPaneComponent"

export default async function page({params}: {params: {title: string}}) {

  // destructure the title parameter from params
  const {title} = await params

  // Fetch the question from the database using the title parameter
  const reponse = await fetch(`http://localhost:3000/api/dsa?title=${title}`)
  const question = await reponse.json()

  return (
    <SplitPaneComponent question={question} />   
  )
}