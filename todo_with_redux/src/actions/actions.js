const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';


const addTodoAction = (newTodo) =>  {
    return {
        type: ADD_TODO,
        todo: newTodo

 }
}

const removeTodoAction = (todoIndex) =>  {
    
    return {
        type: REMOVE_TODO,
        item: todoIndex
    }
}

const editTodoAction = (todoIndex,newItem) =>  {
    
    return {
        type: EDIT_TODO,
        itemIndex: todoIndex,
        updatedItem: newItem

    }
}

export { ADD_TODO, addTodoAction,REMOVE_TODO,removeTodoAction,editTodoAction, EDIT_TODO };