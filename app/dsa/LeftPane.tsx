import SubHeader from 'app/components/headers/SubHeader'

interface LeftPaneProps {
  title: string;}

function LeftPane({title}: LeftPaneProps) {
  return (
    <h2>{title}</h2>
  )
}

export default LeftPane