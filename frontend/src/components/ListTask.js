import React from 'react'

function ListTask({todo}) {
    const {id, title} = todo;
    return <div data-testid='todo-2'>{title}</div>
}

export default ListTask;