import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextid: number;

  constructor() {
    this.todos = [
    
    ];

    this.nextid = 3;
   }

   public addTodo (text: string): void {     
     let todo = new Todo (this.nextid,text);
     this.todos.push(todo);
     this.nextid++;
   }
public getTodos(): Todo[] {
return this.todos;
}

public removeTodo (id: number): void {
  this.todos = this.todos.filter ((todo) =>todo.id != id);
}

}
