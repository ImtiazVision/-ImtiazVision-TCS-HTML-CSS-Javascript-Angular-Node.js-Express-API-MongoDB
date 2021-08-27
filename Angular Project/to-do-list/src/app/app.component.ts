import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  // This is the state 
  todos: string[] = [];
  todoText = '';

  // Life cycle 
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  // Events function 

  addTodo() { 
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
