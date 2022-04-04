import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { AddTodo, RemoveTodo, CreateNewTodo } from '../store/actions/TodoActions'

const TodoList = (props) => {

    const handleChange = (event) => {
        props.createTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(props.todoState.newTodo)
    }

    const handleDelete = (index) => {
        console.log(index)
        props.removeTodo(index)
    }


    return (
        <div>
            <TodoForm
                newTodo={ props.todoState.newTodo }
                handleChange={ handleChange }
                handleSubmit={ handleSubmit }
            />
            {props.todoState.todos.map((todo, index) => (
                <li key={index} onClick={() => { handleDelete(index) } }>{ todo }</li>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)

    return {
        todoState: state.todoState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
        removeTodo: (index) => dispatch(RemoveTodo(index)),
        createTodo: (formValue) => dispatch(CreateNewTodo(formValue))
    }
}

export default connect (mapStateToProps, mapActionsToProps) (TodoList);