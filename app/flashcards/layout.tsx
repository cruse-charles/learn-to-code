import React from 'react'

const layout = ({children}) => {
  return (
    <>
      <div>Flashcards</div>
      <div>Test your knowledge!</div>
      <div>{children}</div>
    </>
  )
}

export default layout