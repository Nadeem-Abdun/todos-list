import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
    <h4 className='mt-3 mb-1'>{todo.title}</h4>
    <p className='mt-1 mb-1'>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    <hr />
    </div>
    </>
  )
}

