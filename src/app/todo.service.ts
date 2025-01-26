import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl ='http://localhost:8080'; 

  constructor(private http: HttpClient) { } //  allows you to make HTTP requests

  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allList`);
  }

  // POST: Add a new To-Do item
  addTodo(todo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/newTodo`, todo);
  }

  // PUT: Update a specific To-Do item
  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, todo);
  }

  // DELETE: Delete a specific To-Do item
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}
