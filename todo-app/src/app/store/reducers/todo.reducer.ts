// Step 3: Create Reducer – Uncomment below to define how state changes in response to actions

// import { createReducer, on } from '@ngrx/store';
// import * as TodoActions from '../actions/todo.actions';
// import { Todo } from '../../models/todo.model';

// export interface TodoState {
//   todos: Todo[];
//   loaded: boolean;
// }

// export const initialState: TodoState = {
//   todos: [],
//   loaded: false
// };

// export const todoReducer = createReducer(
//   initialState,
//   on(TodoActions.addTodo, (state, { todo }) => ({
//     ...state,
//     todos: [...state.todos, todo]
//   })),

//   on(TodoActions.deleteTodo, (state, { id }) => ({
//     ...state,
//     todos: state.todos.filter(t => t.id !== id)
//   })),

//   on(TodoActions.toggleTodo, (state, { id }) => ({
//     ...state,
//     todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
//   })),

//   on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
//     ...state,
//     todos: [...todos],
//     loaded: true
//   }))
// );
