import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-local-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListLocalComponent {
  todos: Todo[] = [];
  newTodoText: string = '';

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(data=>{
      this.todos = data;
    })
  }

  addTodo() {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoText,
        completed: false
      };

      this.todos = [...this.todos, newTodo];

      this.newTodoText = '';
    }
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
