import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {id}= useParams()
  return (
    <div className='bg-gray-400 text-3xl p-4 m-4'>
      User:{id}
    </div>
  )
}
