// Step 2: Create Reducer – Uncomment below to define how state changes in response to actions

// import { createReducer, on } from '@ngrx/store';
// import * as TodoActions from '../actions/todo.actions';
// import { Todo } from '../../models/todo.model';

// export const initialState: Todo[] = [];

// export const todoReducer = createReducer(
//   initialState,
//   on(TodoActions.addTodo, (state, { todo }) => [...state, todo]),
//   on(TodoActions.deleteTodo, (state, { id }) => state.filter(t => t.id !== id)),
//   on(TodoActions.toggleTodo, (state, { id }) =>
//     state.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
//   )
// );