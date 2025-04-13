import { Component, Input } from '@angular/core';
import { Todo } from '../todo-list/todo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() todos: Todo[] = []; 

  get incompleteTodoCount(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get completedTodoCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
}
