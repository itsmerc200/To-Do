import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoModel } from './Model/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl="http://localhost:8080";

  constructor(private http: HttpClient) { } //  allows you to make HTTP requests



  getTodo():Observable<ToDoModel[]>{
    return this.http.get<ToDoModel[]>(`${this.apiUrl}/allList`);
  }

  addTodo(toDo: ToDoModel): Observable<ToDoModel> {
    return this.http.post<ToDoModel>(`${this.apiUrl}/newTodo`, toDo);
  }

  updateTodo(toDo:ToDoModel):Observable<ToDoModel>{
    return this.http.put<ToDoModel>(`${this.apiUrl}/update/${toDo.id}`,toDo)
  }

  deleteTodo(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`, { responseType: 'text' as 'json' });
  }


}
