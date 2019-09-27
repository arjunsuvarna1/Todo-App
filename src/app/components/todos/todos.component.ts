import { Component, OnInit } from '@angular/core';
import{ Todos} from '../../model/todos'
import { Title } from '@angular/platform-browser';
import { stringify } from 'querystring';
import{TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos:Todos[];
  constructor(private todoService:TodoService) { 
    
  }

  ngOnInit() {
     this.todoService.getTodos().subscribe(todos =>{
       this.todos =todos;
     });
    
  }

}
