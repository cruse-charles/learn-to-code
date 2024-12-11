import SplitPaneComponent from "../SplitPaneComponent"

export default async function page({params}) {
    const {title} = await params
    const reponse = await fetch(`http://localhost:3000/api/dsa?title=${title}`)
    const question = await reponse.json()

  return (
    <SplitPaneComponent question={question} />   
  )
}