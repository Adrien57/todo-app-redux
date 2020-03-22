const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    important:false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'TOGGLE_IMPORTANT':
            return state.map (todo =>
                todo.id === action.id ? {...todo,important: !todo.important } :todo
            )
        default:
            return state
    }
}

export default todos