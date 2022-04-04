import { ADD_TODO, NEW_TODO, REMOVE_TODO } from "../types"

const initialState = {
    todos: ['Learn some redux!'],
    newTodo: ''
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload], newTodo: '' }
        case NEW_TODO:
            return { ...state, newTodo: action.payload }
        case REMOVE_TODO:
            console.log(action.payload)
            return { ...state, todos: state.todos.filter((a, index) => {return index !=action.payload} )}
        default:
            return { ...state}
    }
}

export default TodoReducer