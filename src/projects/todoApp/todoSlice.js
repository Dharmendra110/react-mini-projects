import { createSlice } from "@reduxjs/toolkit";

function getTodo(){
 const save =  localStorage.getItem('todos');

 return save?JSON.parse(save) : []
}

function saveTodo(todos){
  localStorage.setItem('todos',JSON.stringify(todos))
}

const initialState ={
  todos: getTodo(),
  edit: null,
}

const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const newTodo =action.payload
      if(state.todos.some(todo=>todo.name===newTodo.name)){
        return alert('Duplicate todo not allowed')
      }
      state.todos.push(action.payload)
      saveTodo(state.todos)
    },
    deleteTodo:(state,action)=>{
     state.todos= state.todos.filter(todo=>todo.id!==action.payload)
    
     saveTodo(state.todos)
    },
    editTodo:(state,action)=>{
       state.edit = action.payload
      
    },
    updateTodo:(state,action)=>{
      const {id,name,age} = action.payload;
      state.todos=state.todos.map(todo=>todo.id=== id? {...todo,name,age}: todo)
       state.edit = null
      saveTodo(state.todos)
    }
  }
})

export const {addTodo,deleteTodo,editTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;