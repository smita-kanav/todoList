import React from 'react'

function List(props) {
  return (
    
    <li  className="list-item">
        <span data-testid="list-todo">-</span>{props.item} {props.listItem[3]} {props.listItem[4]}
        <span className='icons'>
        <i 
        onClick={e=>{
            props.deleteItem(props.listItem[0])
        }}>Delete</i>
        <i
        onClick={e=>{
            props.editItem(props.listItem[0])
        }}>Edit</i>
        </span>
    </li>
   
  )
}

export default List