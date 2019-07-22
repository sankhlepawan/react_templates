import {ADD_TODO, REMOVE_TODO, EDIT_TODO} from '../actions/actions';

let defaultState = {
    todoList: []
}

const reducers = (state = defaultState, action) =>  {
   switch(action.type) {
        
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,action.todo]
            }

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => { return item !== action.item})
            }
        
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((i,index) => { 
                    if(index === action.itemIndex) {
                        state.todos[index] = action.updatedItem;
                    }
            })
            }

        default: return state
    }
}

export default reducers;