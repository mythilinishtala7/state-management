import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-local-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderLocalComponent {
  @Input() todos: Todo[] = []; 

  get incompleteTodoCount(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get completedTodoCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
}
