import React from 'react'

export default function todo({todo}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
  )
}

