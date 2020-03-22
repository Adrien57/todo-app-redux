import { connect } from 'react-redux'
import { toggleTodo, toggleImportant,deleteTodo } from '../store/actions'
import TodoList from '../components/todoList'
import { VisibilityFilters } from '../store/actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_IMPORTANT:
            return todos.filter(t=> t.important)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    toggleImportant : id => dispatch (toggleImportant(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)