import React from 'react'
import Todo from './Todo'
export default function todos(prop) {
  return (
    <div>
      <div className="container">
        <h2>To dos List</h2>
        <Todo todo={prop.todo[0]}/>
      </div>
    </div>
  )
}

