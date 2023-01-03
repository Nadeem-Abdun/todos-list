import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <>
      <div className='container Todos'>
        <h3 className="text-center my-3">{props.compntheading}</h3>
        {/* <TodoItem todo={props.todos[2]}/> */} {/*For single object from array*/}
        {
          props.todos.length === 0 ? ("You have no ToDo's left to display") :
            props.todos.map((todo) => {
              return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
            })
        }
        {/*For all objects from array*/}
      </div>
    </>
  )
}
