// Step 2: Create Effects – Uncomment below to Handle async operations like API call to fetch the todo list 

// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap, map } from 'rxjs/operators';
// import { loadTodos, loadTodosSuccess } from '../actions/todo.actions';
// import { TodoService } from '../../services/todo.service';

// @Injectable()
// export class TodoEffects {
//   constructor(private actions$: Actions, private todoService: TodoService) {}

//   loadTodos$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadTodos),
//       mergeMap(() =>
//         this.todoService.getTodos().pipe(
//           map(todos => loadTodosSuccess({ todos }))
//         )
//       )
//     )
//   );
// }
