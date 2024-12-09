'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'


export default function page() {
    const {title} = useParams()
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const reponse = await fetch(`http://localhost:3000/api/dsa?title=${title}`)
                const data = await reponse.json()
                setQuestion(data)
            } catch (error) {
                console.error('Error fetching question:', error)
            }
        }

        fetchQuestion()
    }, [])

  return (
    <>
        <div>{title}</div>
        <div>{question?.title}</div>
    </>
  )
}