import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, onImportantClick, important, onDeleteClick }) => (
    <>
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: important ? 'orange' : 'inherit'
        }}
    >
        {text}

    </li>
        <button style={{display:'inline'}} onClick={onImportantClick}>Important</button>
        <button onClick={onDeleteClick}>Delete</button>

    </>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo