import { Component, OnInit, Input  } from '@angular/core';
import { Todos } from 'src/app/model/todos';
import{TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  constructor(private  todoservice:TodoService) { }

  ngOnInit() {
  }
  //set dynamic classes
  setClasses(){
    let classes =  {
      todo: true,
      'is-complete': this.todo.completed,
    }
    return classes;
  }
  //onToggle Method
  onToggle(){
    console.log('toggle');
    this.todo.completed = !this.todo.completed;
  }
  onDelete(){
    console.log('Delete');
    
  }
  
}
