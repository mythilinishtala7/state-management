// Step 5: Dispatch Actions – Uncomment below to trigger store updates for add, delete, and toggle operations

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable, take } from 'rxjs';
// import { addTodo, deleteTodo, loadTodos, toggleTodo } from '../../store/actions/todo.actions';
// import { selectTodos, selectTodosLoaded } from '../../store/selectors/todo.selector';
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
//     this.store.select(selectTodosLoaded)
//     .pipe(take(1))
//     .subscribe(loaded => {
//       if (!loaded) {
//         this.store.dispatch(loadTodos());
//       }
//     });
//   }

//   loadFromAPI() {
//     this.store.dispatch(loadTodos());
//   }

//   addTodo(): void {
//     const trimmed = this.newTodoText.trim();
//     if (trimmed) {
//       const newTodo: Todo = {
//         id: Date.now(),
//         title: trimmed,
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
