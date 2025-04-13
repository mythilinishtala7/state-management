// Step 4: Dispatch Actions – Uncomment below to trigger store updates for add, delete, and toggle operations

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { addTodo, deleteTodo, toggleTodo } from '../../store/actions/todo.actions';
// import { selectTodos } from '../../store/selectors/todo.selector';
// import { Todo } from '../../models/todo.model';

// @Component({
//   selector: 'app-ngrx-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.scss']
// })
// export class TodoListNgRXComponent {
//   todos$: Observable<Todo[]>;
//   newTodoText: string = '';

//   constructor(private store: Store) {
//     this.todos$ = this.store.select(selectTodos);
//   }

//   addTodo(): void {
//     const trimmed = this.newTodoText.trim();
//     if (trimmed) {
//       const newTodo: Todo = {
//         id: Date.now(),
//         text: trimmed,
//         completed: false
//       };
//       this.store.dispatch(addTodo({ todo: newTodo }));
//       this.newTodoText = '';
//     }
//   }

//   toggleTodo(id: number): void {
//     this.store.dispatch(toggleTodo({ id }));
//   }

//   removeTodo(id: number): void {
//     this.store.dispatch(deleteTodo({ id }));
//   }
// }