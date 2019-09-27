import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';

import{Todos} from '../model/todos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  limit  
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit ='?_limit=5 ';
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todos[]>{
    return this.http.get<Todos[]>(`${this.todosUrl}${this.todosLimit }`);
  }
}
