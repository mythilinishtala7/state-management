// Step 6: Select State – Uncomment below to read todo data from the global store using selector

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { selectCompletedTodos, selectIncompleteTodos } from '../../store/selectors/todo.selector';

// @Component({
//   selector: 'app-ngrx-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })

// export class HeaderNgRXComponent {
//   completedTodoCount: number = 0;
//   incompleteTodoCount: number = 0;

//   constructor(private store: Store) {
//     this.store.select(selectCompletedTodos).subscribe(todos => this.completedTodoCount = todos.length);
//     this.store.select(selectIncompleteTodos).subscribe(todos => this.incompleteTodoCount = todos.length);
//   }
// }